export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-headlessui",
    "nuxt-vercel-analytics",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
  ],
  runtimeConfig: {
    githubToken: "",
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
});