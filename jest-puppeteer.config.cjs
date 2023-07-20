/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  launch: {
    headless: 'new',
    ignoreDefaultArgs: ['--disable-extensions'],
    args: ['--no-sandbox'],
    dumpio: true
  },
  browser: 'chromium',
  browserContext: 'default',
  server: {
    command: 'npm start',
    port: 3010,
    launchTimeout: 10000,
    debug: true,
  },
}