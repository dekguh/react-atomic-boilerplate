import { test, expect } from '@playwright/test'

test.describe('Sign in page e2e testing', () => {
  test('should url is /login', async ({ page }) => {
    await page.goto('/sign-in')
    await expect(page).toHaveURL('/sign-in')
  })

  test('show message error all field must filled', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('buttonSubmitId').click()

    await expect(page.getByTestId('formSignInId')).toContainText(/this field must filled/ig)
  })

  test('message error not shown when field are filled', async ({ page }) => {
    await page.goto('/sign-in')
    await page.getByTestId('inputEmailId').fill('dek@test.com')
    await page.getByTestId('inputPasswordId').fill('123456')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('formSignInId')).not.toContainText(/this field must filled/ig)
  })
})
