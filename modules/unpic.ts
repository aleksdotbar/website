import { addComponent, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-unpic",
    configKey: "unpic",
  },
  setup() {
    addComponent({
      name: "UnpicImage",
      export: "Image",
      filePath: "@unpic/vue",
    });
  },
});
