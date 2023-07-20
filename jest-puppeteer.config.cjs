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
    launchTimeout: 18000,
    debug: true,
  },
}