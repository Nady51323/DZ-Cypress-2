const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "h52bvh",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
