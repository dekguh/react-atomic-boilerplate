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
    await page.screenshot({
      path: '__resultsTest__/home/sign in then redirect to home page.jpg',
      fullPage: true
    })
  })

  test('mode filter table is active', async () => {
    await page.getByTestId('btnModeFilterId').click()
    await expect(page.getByTestId('input-filter-1')).toBeDefined()
    await expect(page.getByTestId('input-filter-2')).toBeDefined()
    await page.screenshot({
      path: '__resultsTest__/home/mode filter table is active.jpg',
      fullPage: true
    })
  })

  test('filter search item on column header', async () => {
    await page.getByTestId('btnModeFilterId').click()
    await page.getByTestId('input-filter-1').pressSequentially('MacBook Pro')
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/MacBook Pro/ig)
    await page.screenshot({
      path: '__resultsTest__/home/filter search item on column header.jpg',
      fullPage: true
    })
  })

  test('filter sort item asc, desc and none', async () => {
    // sort is not active
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/iPhone 9/ig)
    await page.screenshot({
      path: '__resultsTest__/home/filter sort is not active.jpg',
      fullPage: true
    })

    await page.getByTestId('button-sort-1').click()
    // asc
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/- Daal Masoor 500 grams/ig)
    await page.screenshot({
      path: '__resultsTest__/home/filter sort is asc.jpg',
      fullPage: true
    })

    await page.getByTestId('button-sort-1').click()
    // desc
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/Tree Oil 30ml/ig)
    await page.screenshot({
      path: '__resultsTest__/home/filter sort is desc.jpg',
      fullPage: true
    })

    await page.getByTestId('button-sort-1').click()
    // sort is not active
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/iPhone 9/ig)
  })

  test('hide and show column title', async () => {
    await page.getByTestId('checkboxTitleId').locator('input').click()
    await expect(page.locator('[data-rowindex="0"]')).not.toContainText(/iPhone 9/ig)
    await page.screenshot({
      path: '__resultsTest__/home/hide column title.jpg',
      fullPage: true
    })

    await page.getByTestId('checkboxTitleId').locator('input').click()
    await expect(page.locator('[data-rowindex="0"]')).toContainText(/iPhone 9/ig)
    await page.screenshot({
      path: '__resultsTest__/home/show column title.jpg',
      fullPage: true
    })
  })

  test('should logout and redirect to sign in page', async () => {
    await page.getByTestId('btnSignOutId').click()
    await page.waitForURL('/sign-in')
    await expect(page).toHaveURL('/sign-in')
    await page.screenshot({
      path: '__resultsTest__/home/should logout and redirect to sign in page.jpg',
      fullPage: true
    })
  })
})