import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";
import { FontaineTransform } from "fontaine";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [590],
    },
  }),
  integrations: [tailwind(), qwikdev()],
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
