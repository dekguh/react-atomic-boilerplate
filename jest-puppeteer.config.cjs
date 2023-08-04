/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */

const confServer = {
  command: 'npm run start',
  port: 9999
}

const confLaunch = {
  headless: 'new',
  ignoreDefaultArgs: ['--disable-extensions'],
  protocol: 'http',
  usedPortAction: 'kill',
  launchTimeout: 240000,
  args: [
    '--ignore-certificate-errors',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu'
  ]
}

// CI true = CI on github actions
module.exports = {
  launch: confLaunch,
  server: confServer
}