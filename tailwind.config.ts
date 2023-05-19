import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Config>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    colors: ({ colors }) => ({
      gray: colors.neutral,
    }),
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
