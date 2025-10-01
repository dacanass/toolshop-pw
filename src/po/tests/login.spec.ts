import { test, expect } from "./fixtures";

test.describe('Testing Login feature', async () => {
  test('Should login succesfuly', async ({ page, loginPage }) => {
    await loginPage.goto()
    await loginPage.login("customer@practicesoftwaretesting.com", "pass123")
  })

})
