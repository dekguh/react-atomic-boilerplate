/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  launch: {
    headless: 'new',
    ignoreDefaultArgs: ['--disable-extensions'],
    args: ['--no-sandbox'],
  },
  browser: 'chromium',
  browserContext: 'default',
  server: {
    command: 'npm start',
    port: 3000,
    launchTimeout: 120000,
    debug: true,
  },
}