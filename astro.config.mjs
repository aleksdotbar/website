import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { FontaineTransform } from "fontaine";

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), qwikdev()],
  vite: {
    plugins: [FontaineTransform.vite({
      fallbacks: ["BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans"]
    })]
  }
});