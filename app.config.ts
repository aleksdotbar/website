export default defineAppConfig({
  nuxtIcon: {
    size: "1.5rem",
  },
  vercelAnalytics: {
    beforeSend: (e) => {
      if (localStorage.getItem("va-disabled")) {
        return null;
      }

      return e;
    },
  },
});
