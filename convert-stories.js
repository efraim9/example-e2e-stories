const convertStories = require('e2e-stories')

convertStories({
  out: './test/spec', // path to JS test files output folder
  outputType: "puppeteer", // Currently only Puppeteer is available, cypress and other tools will be added soon.
  headers: {"bypass-Token": "SFSA-1625-REWQ-9531"}, // External HTTP headers to be sent with every request on the page
  pathToYaml: "*(playground|test|tests|spec|src|build)/**/stories/**/*.+(yaml|yml)" // Glob pattern for finding yaml files, be careful with the configuration
})