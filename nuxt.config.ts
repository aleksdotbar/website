export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vue-macros/nuxt",
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
