import { test, expect, Page } from '@playwright/test'
import { mockSignIn } from '__mocks__/auth'

test.describe('Home page e2e testing', () => {
  let page: Page

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    mockSignIn(page)
    await page.waitForURL('/')
    await page.goto('/')
    await page.waitForResponse('https://dummyjson.com/auth/products')
  })

  test('sign in then redirect to home page', async () => {
    await expect(page).not.toHaveURL('/sign-in')
    await expect(page).toHaveURL('/')
  })

  test('mode filter table is active', async () => {
    await page.getByTestId('btnModeFilterId').click()
    await expect(page.getByTestId('input-filter-1')).toBeDefined()
    await expect(page.getByTestId('input-filter-2')).toBeDefined()
  })

  test('filter search item on column header', async () => {
    await page.getByTestId('btnModeFilterId').click()
    await page.getByTestId('input-filter-1').pressSequentially('MacBook Pro')
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/MacBook Pro/ig)
  })

  test('filter sort item asc, desc and none', async () => {
    // sort is not active
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/iPhone 9/ig)
    await page.getByTestId('button-sort-1').click()
    // asc
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/- Daal Masoor 500 grams/ig)
    await page.getByTestId('button-sort-1').click()
    // desc
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/Tree Oil 30ml/ig)
    await page.getByTestId('button-sort-1').click()
    // sort is not active
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/iPhone 9/ig)
  })

  test('hide and show column title', async () => {
    await page.getByTestId('checkboxTitleId').locator('input').click()
    await expect(page.locator('[data-rowindex="0"]')).not.toContainText(/iPhone 9/ig)
    await page.getByTestId('checkboxTitleId').locator('input').click()
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/iPhone 9/ig)
  })

  test('should logout and redirect to sign in page', async () => {
    await page.getByTestId('btnSignOutId').click()
    await page.waitForURL('/sign-in')
    await expect(page).toHaveURL('/sign-in')
  })
})