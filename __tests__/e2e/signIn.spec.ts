import { test, expect } from '@playwright/test'

test.describe('Sign in page e2e testing', () => {
  test('should url is /sign-in', async ({ page }) => {
    await page.goto('/sign-in')
    await expect(page).toHaveURL('/sign-in')
    await page.screenshot({
      path: '__resultsTest__/signIn/should url is sign-in.jpg',
      fullPage: true
    })
  })

  test('show message error all field must filled', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('buttonSubmitId').click()

    await expect(page.getByTestId('formSignInId')).toContainText(/this field must filled/ig)
    await page.screenshot({
      path: '__resultsTest__/signIn/show message error all field must filled.jpg',
      fullPage: true
    })
  })

  test('message validation error are not shown', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('inputEmailId').fill('dek@test.com')
    await page.getByTestId('inputPasswordId').fill('123456')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('formSignInId')).not.toContainText(/this field must filled/ig)
    await page.screenshot({
      path: '__resultsTest__/signIn/message validation error are not shown.jpg',
      fullPage: true
    })
  })

  test('show a message failed login when it have wrong email/password', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('inputEmailId').fill('dek@test.com')
    await page.getByTestId('inputPasswordId').fill('123456')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('snackbarNotifId')).toContainText(/failed login, please check your email or password/ig)
    await page.screenshot({
      path: '__resultsTest__/signIn/show a message failed login when it have wrong email or password.jpg',
      fullPage: true
    })
  })

  /**
   * using fake API auth from https://dummyjson.com/docs/auth
   */
  test('success login and then redirect to the home page', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('inputEmailId').fill('kminchelle')
    await page.getByTestId('inputPasswordId').fill('0lelplR')
    await page.getByTestId('buttonSubmitId').click()
    await page.waitForURL('/')
    await expect(page).not.toHaveURL('/sign-in')
    await expect(page).toHaveURL('/')
    await page.screenshot({
      path: '__resultsTest__/signIn/success login and then redirect to the home page.jpg',
      fullPage: true
    })
  })
})
