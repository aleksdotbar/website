const URL = process.env.BROWSERLESS_URL;
const TOKEN = process.env.BROWSERLESS_TOKEN;

export const config = {
  runtime: "edge",
  regions: ["pdx1"],
};

export default async () => {
  const pdf = await fetch(`${URL}/pdf?token=${TOKEN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: "https://xanderbarkhatov.com/resume",
      options: {
        format: "A4",
        printBackground: true,
        scale: 0.95,
        margin: {
          top: "30px",
          right: "30px",
          bottom: "30px",
          left: "30px",
        },
      },
    }),
  }).then((res) => res.arrayBuffer());

  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Cache-Control": "public, max-age=0, s-maxage=2678400",
    },
  });
};
