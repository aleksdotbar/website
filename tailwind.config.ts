import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default <Config>{
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: ({ colors }) => ({
      black: colors.black,
      gray: colors.neutral,
      transparent: "transparent",
    }),
    extend: {
      fontFamily: {
        sans: ["Poppins, Poppins fallback", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        wave: "wave 0.5s ease-in-out 3",
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["lucide"]),
    }),
  ],
};
