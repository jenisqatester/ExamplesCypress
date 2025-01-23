const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com/guide/', // Configuración correcta
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Configuración correcta
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
