import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Change this to your API or app URL
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    }
  }
});