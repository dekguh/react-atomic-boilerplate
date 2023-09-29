import { test, expect } from '@playwright/test'

test.describe('Sign up page e2e testing', () => {
  test('should url is /sign-up', async ({ page }) => {
    await page.goto('/sign-up')
    await expect(page).toHaveURL('/sign-up')
    await page.screenshot({
      path: '__resultsTest__/signUp/should url is sign-up.jpg',
      fullPage: true
    })
  })

  test('show message error all field must filled', async ({ page }) => {
    await page.goto('/sign-up')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('formSignUpId')).toContainText(/this field must filled/ig)
    await page.screenshot({
      path: '__resultsTest__/signUp/show message error all field must filled.jpg',
      fullPage: true
    })
  })

  test('show message error confirm password must same', async ({ page }) => {
    await page.goto('/sign-up')
    await page.getByTestId('inputPasswordId').fill('123456')
    await page.getByTestId('inputRePasswordId').fill('1234')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('formSignUpId')).toContainText(/confirm password must same/ig)
    await page.screenshot({
      path: '__resultsTest__/signUp/show message error confirm password must same.jpg',
      fullPage: true
    })
  })

  test('dont show message error when password and repassword is same', async ({ page }) => {
    await page.goto('/sign-up')
    await page.getByTestId('inputPasswordId').fill('123456')
    await page.getByTestId('inputRePasswordId').fill('123456')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('formSignUpId')).not.toContainText(/confirm password must same/ig)
    await page.screenshot({
      path: '__resultsTest__/signUp/dont show message error when password and repassword is same.jpg',
      fullPage: true
    })
  })

  test('message error is not shown', async ({ page }) => {
    await page.goto('/sign-up')
    await page.getByTestId('inputEmailId').fill('dek@test.com')
    await page.getByTestId('inputPasswordId').fill('123456')
    await page.getByTestId('inputRePasswordId').fill('123456')
    await page.getByTestId('buttonSubmitId').click()
    await expect(page.getByTestId('formSignUpId')).not.toContainText(/this field must filled/ig)
    await expect(page.getByTestId('formSignUpId')).not.toContainText(/confirm password must same/ig)
    await page.screenshot({
      path: '__resultsTest__/signUp/message error is not shown.jpg',
      fullPage: true
    })
  })
})