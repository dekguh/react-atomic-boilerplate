/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  launch: {
    headless: false,
  },
  browser: 'chromium',
  browserContext: 'default',
  server: {
    command: 'npm start',
    port: 3000,
    launchTimeout: 10000,
    debug: true
  }
}