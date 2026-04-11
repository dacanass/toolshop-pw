import { createRandomUser } from '../../lib/datafactory/userModel';
import { expect, test } from './fixtures';

test.describe('Authentication: Register', () => {
  test.beforeEach(async ({ authPage }) => {
    await authPage.goto();
  });

  test('TC-UI-AUTH-10 - Successful registration with all fields @smoke @regresion', async ({
    authPage,
    loginPage,
    page,
  }) => {
    const newUser = createRandomUser();
    await authPage.registerUser(newUser);
    await expect(page).toHaveURL(/.*\/auth\/login/); //Gateway Assertion: "Espera inteligente"
    await expect(loginPage.loginHeader).toContainText('Login'); //Functional Assertion
  });
});
