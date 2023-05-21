// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vue-macros/nuxt",
    "nuxt-icon",
    "nuxt-headlessui",
    "nuxt-vercel-analytics",
  ],
  image: {
    screens: {
      profile: 400,
      project: 640,
    },
  },
  routeRules: {
    "/*": {
      prerender: true,
    },
  },
});
