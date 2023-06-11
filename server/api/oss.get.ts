type ResponseData = {
  data: {
    viewer: {
      repositories: {
        nodes: {
          name: string;
          description: string;
          url: string;
          stargazerCount: number;
        }[];
      };
      contributionsCollection: {
        pullRequestContributionsByRepository: {
          repository: {
            nameWithOwner: string;
            description: string;
            url: string;
            visibility: "PUBLIC" | "PRIVATE";
          };
          contributions: {
            totalCount: number;
          };
        }[];
      };
    };
  };
};

const query = `
query {
  viewer {
    repositories(
      ownerAffiliations: OWNER
      privacy: PUBLIC
      isFork: false
      first: 100
    ) {
      nodes {
        name
        description
        url
        stargazerCount
      }
    }
    contributionsCollection {
      pullRequestContributionsByRepository {
        repository {
          nameWithOwner
          description
          url
          visibility
        }
        contributions(orderBy: {direction: DESC}) {
          totalCount
        }
      }
    }
  }
}`;

export default eventHandler(async (e) => {
  const config = useRuntimeConfig();

  const {
    data: { viewer },
  }: ResponseData = await $fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.githubToken}`,
    },
    body: { query },
  }).catch(() => ({
    data: {
      viewer: {
        repositories: {
          nodes: [],
          contributionsCollection: {
            pullRequestContributionsByRepository: [],
          },
        },
      },
    },
  }));

  const repositories = viewer.repositories.nodes
    .filter((x) => Number(x.stargazerCount) > 5)
    .map((x) => ({
      name: x.name,
      description: x.description,
      url: x.url,
      stars: x.stargazerCount,
    }));

  const contributions =
    viewer.contributionsCollection.pullRequestContributionsByRepository
      .filter((x) => x.repository.visibility === "PUBLIC")
      .map((x) => ({
        name: x.repository.nameWithOwner,
        description: x.repository.description,
        url: x.repository.url,
        prs: x.contributions.totalCount,
      }));

  return {
    repositories,
    contributions,
  };
});
