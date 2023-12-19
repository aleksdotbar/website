type ResponseData = {
  data: {
    viewer: {
      repositories: {
        nodes: {
          name: string;
          description: string | null;
          url: string;
          stargazerCount: number;
        }[];
      };
      contributionsCollection: {
        pullRequestContributionsByRepository: {
          repository: {
            nameWithOwner: string;
            description: string | null;
            url: string;
            visibility: "PUBLIC" | "PRIVATE";
            owner: {
              login: string;
            };
            viewerHasStarred: boolean;
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
          owner {
            login
          }
          viewerHasStarred
        }
        contributions(orderBy: {direction: DESC}) {
          totalCount
        }
      }
    }
  }
}`;

const token = import.meta.env.GITHUB_TOKEN;

export const getOSSData = async () => {
  const {
    data: { viewer },
  }: ResponseData = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  }).then((x) => x.json());

  const repositories = viewer.repositories.nodes
    .filter((x) => Number(x.stargazerCount) > 10)
    .map((x) => ({
      name: x.name,
      description: x.description,
      url: x.url,
      stars: x.stargazerCount,
    }));

  const contributions =
    viewer.contributionsCollection.pullRequestContributionsByRepository
      .filter(
        (x) =>
          x.repository.visibility === "PUBLIC" &&
          x.repository.owner.login !== "xanderbarkhatov" &&
          x.repository.viewerHasStarred,
      )
      .map((x) => ({
        name: x.repository.nameWithOwner,
        description: x.repository.description,
        url: x.repository.url,
        prs: x.contributions.totalCount,
      }));

  return { repositories, contributions };
};
