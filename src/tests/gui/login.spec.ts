import { test, expect } from './fixtures';
import { errorMessage, userData } from '../../po/utils/data';
import { registerUser } from '../../../src/lib/datafactory/register';
import { createRandomUser } from '../../../src/lib/datafactory/userModel';

test.describe('Login Feature', async () => {
  const { email, password } = userData;

  test.beforeEach(async ({ loginPage}) => {
    await loginPage.goto();
  });

  test('should login with newly registered user', async ({ page, loginPage, request }) => {
    //Register new user
    const newUser= createRandomUser();
    await registerUser(request, newUser);
    //Login with new user
    await loginPage.loginSuccess(newUser.email, newUser.password);
    await expect(page).toHaveURL(/.*account/);
    await expect(page.getByRole('heading',{name:"My account"})).toBeVisible();
  });

  test('should succesfuly login with valid credentials', async ({ page, loginPage }) => {
    await loginPage.loginSuccess(`${email[0]}`, `${password}`);
    await expect(page).toHaveURL(/.*account/);
  });

  test('should display error message with invalid credentials', async ({ loginPage }) => {
    await loginPage.loginInvalid(`${email[1]}`, `${password}`);
    await expect(loginPage.generalErrorMessage).toBeVisible();
    await expect(loginPage.generalErrorMessage).toContainText(errorMessage.loginInvalidCredentials);
  });

  test('should display error when email field is empty', async ({ loginPage }) => {
    await loginPage.loginInvalid('', `${password}`);
    await expect(loginPage.emailErrorMessage).toContainText(errorMessage.loginEmailEmpty);
  });

  test('should display error message when email format is invalid ', async ({ loginPage }) => {
    await loginPage.loginInvalid('aaa', `${password}`);
    await expect(loginPage.emailErrorMessage).toContainText(errorMessage.loginEmailInvalidFormat);
  });

  test('should display error message when password is empty', async ({ loginPage }) => {
    await loginPage.loginInvalid(email[0], '');
    await expect(loginPage.passwordErrorMessage).toContainText(errorMessage.loginPasswordEmpty);
  });

  test('should display error message when password is too short', async ({ loginPage }) => {
    await loginPage.loginInvalid(email[0], 'pa');
    await expect(loginPage.passwordErrorMessage).toContainText(errorMessage.loginPasswordLenght);
  });
});
