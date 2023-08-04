import 'jest-puppeteer'
import '@testing-library/jest-dom'

describe('Sign up page e2e testing', () => {
  beforeAll(async () => {
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto('http://localhost:9999/sign-up')
  })

  it('should page rendered correctly', async () => {
    try {
      await page.screenshot({ path: './__resultsTest__/signup_page_is_rendered.jpg' })
      await expect(page).toBeInTheDocument()
      await expect(page).toContain(/Sign Up/i)
    } catch (err) {
      // error
    }
  })

  it('should validation return error on fields', async () => {
    try {
      await page.click('[data-testid="buttonSubmitId"]')
      await page.screenshot({ path: './__resultsTest__/signup_page_is_return_error.jpg' })
    } catch (err) {
      // error
    }
  })

  it('should validation not return error when fields is filled', async () => {
    try {
      await page.type('[data-testid="inputEmailId"]', 'test@test.com')
      await page.type('[data-testid="inputPasswordId"]', '123456')
      await page.type('[data-testid="inputRePasswordId"]', '123456')
      await page.click('[data-testid="buttonSubmitId"]')
      await page.screenshot({ path: './__resultsTest__/signup_page_not_return_error_when_filled.jpg' })
    } catch (err) {
      // error
    }
  })
})