import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { FontaineTransform } from "fontaine";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: true,
  }),
  integrations: [tailwind()],
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: [
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
        ],
      }),
    ],
  },
});
