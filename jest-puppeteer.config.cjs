/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  launch: {
    headless: 'new',
  },
  server: {
    command: 'npm start',
    port: 4444,
    launchTimeout: 10000,
    debug: true,
  },
}