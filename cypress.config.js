const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    viewportWidth: 1280,  // Set default width
    viewportHeight: 720,  // Set default height
    projectId: "nvh163",
    e2e: {
        baseUrl: "https://staging.subcontractorhub.com/auth/login",
        setupNodeEvents(on, config) {
            // Register the bundler and preprocessor
            on("file:preprocessor", createBundler({
                plugins: [createEsbuildPlugin.default(config)],
            }));

            // Add Cucumber preprocessor plugin
            preprocessor.addCucumberPreprocessorPlugin(on, config);
            require('cypress-mochawesome-reporter/plugin')(on);

            return config;
        },
        specPattern: "**/*.feature",
    },
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
});
