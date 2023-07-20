/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  launch: {
    executablePath: '/usr/bin/google-chrome-stable',
    headless: 'new',
    args: [
      '--ignore-certificate-errors',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ]
  },
  server: {
    command: 'npm start',
    port: 3000,
  },
}