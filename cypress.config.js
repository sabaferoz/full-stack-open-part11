const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log(on, config)
      // implement node event listeners here
    },
  },
})
