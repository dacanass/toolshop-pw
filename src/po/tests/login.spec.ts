import { test, expect } from "./fixtures";
import { errorMessage, userData } from "../utils/data";

test.describe('Testing Login feature', async () => {
  const { email, password } = userData

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto()
  })

  test('Should login succesfuly', async ({ page, loginPage }) => {
    await loginPage.login(`${email[0]}`, `${password}`)
    expect(page).toHaveURL("https://practicesoftwaretesting.com/account")
  })

  test('Should not be able to login', async ({ page, loginPage }) => {
    await loginPage.login(`${email[1]}`, `${password}`)
    await expect(loginPage.generalErrorMessage).toBeVisible()
    await expect(loginPage.generalErrorMessage).toContainText(errorMessage.loginInvalidCredentials)
  })
})
