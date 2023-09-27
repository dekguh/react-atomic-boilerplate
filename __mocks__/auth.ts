import { Page } from '@playwright/test'

export const mockSignIn = async (page : Page) => {
  await page.goto('/sign-in')
  await page.getByTestId('inputEmailId').fill('kminchelle')
  await page.getByTestId('inputPasswordId').fill('0lelplR')
  await page.getByTestId('buttonSubmitId').click()
}