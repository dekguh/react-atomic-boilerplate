import { test, expect } from '@playwright/test'

test.describe('Sign in page e2e testing', () => {
  test('should url is /sign-in', async ({ page }) => {
    await page.goto('/sign-in')
    await expect(page).toHaveURL('/sign-in')
  })

  test('show message error all field must filled', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('buttonSubmitId').click()

    await expect(page.getByTestId('formSignInId')).toContainText(/this field must filled/ig)
  })

  test('message validation error are not shown', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('inputEmailId').fill('dek@test.com')
    await page.getByTestId('inputPasswordId').fill('123456')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('formSignInId')).not.toContainText(/this field must filled/ig)
  })

  test('show a message failed login when it have wrong email/password', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('inputEmailId').fill('dek@test.com')
    await page.getByTestId('inputPasswordId').fill('123456')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('snackbarNotifId')).toContainText(/failed login, please check your email or password/ig)
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
  })
})
