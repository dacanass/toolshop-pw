import { test, expect } from "./fixtures";
import { errorMessage, userData } from "../utils/data";

test.describe('Login Feature', async () => {
  const { email, password } = userData

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto()
  })

  test('should succesfuly login with valid credentials', async ({ page, loginPage }) => {
    await loginPage.login(`${email[0]}`, `${password}`)
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/account")
  })

  test('should display error message with invalid credentials', async ({ loginPage }) => {
    await loginPage.login(`${email[1]}`, `${password}`)
    await expect(loginPage.generalErrorMessage).toBeVisible()
    await expect(loginPage.generalErrorMessage).toContainText(errorMessage.loginInvalidCredentials)
  })

  test('should display error when email field is empty', async ({ loginPage }) => {
    await loginPage.login("", `${password}`)
    await expect(loginPage.emailErrorMessage).toContainText(errorMessage.loginEmailEmpty)
  })

  test('should display error message when email format is invalid ', async ({ loginPage }) => {
    await loginPage.login("aaa", `${password}`)
    await expect(loginPage.emailErrorMessage).toContainText(errorMessage.loginEmailInvalidFormat)
  })

  test('should display error message when password is empty', async ({ loginPage }) => {
    await loginPage.login(`${email}`, "")
    await expect(loginPage.passwordErrorMessage).toContainText(errorMessage.loginPasswordEmpty)
  })

  test('should display error message when password is too short', async ({ loginPage }) => {
    await loginPage.login(`${email}`, "pa")
    await expect(loginPage.passwordErrorMessage).toContainText(errorMessage.loginPasswordLenght)
  })

})
