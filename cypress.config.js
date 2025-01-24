const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com/guide/', // URL base para la aplicación
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Patrón de ubicación de los casos de prueba
    setupNodeEvents(on, config) {
      // Implementa listeners de eventos aquí
    },
    env: {
      apiBaseUrl: 'https://jsonplaceholder.typicode.com/posts/1' // URL de la API
    },
  },
  reporter: 'mochawesome', // Configuración del reportador
  reporterOptions: {
    reportDir: 'cypress/reports', // Carpeta donde se guardarán los reportes
    overwrite: false, // No sobrescribir reportes existentes
    html: true, // Generar reportes HTML
    json: true // Generar reportes JSON
  }
});

