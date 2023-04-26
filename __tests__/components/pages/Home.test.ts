import 'jest-puppeteer'

describe('Google', () => {
  beforeAll(async () => {
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    try {
      await expect(page).toMatchTextContent('google')
      await page.screenshot({ path: './homepage_screenshot.jpg'})
    } catch(error) {
      console.log('error')
    } finally {
      await browser.close()
    }
  })
})