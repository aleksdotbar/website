import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";
import { FontaineTransform } from "fontaine";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",

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
