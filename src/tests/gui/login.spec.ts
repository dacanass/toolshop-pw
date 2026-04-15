import { test, expect } from './fixtures';
import { errorMessage, userData } from '../../po/utils/data';
import { registerUser } from '../../lib/datafactory/register';
import { createRandomUser } from '../../lib/datafactory/userModel';

test.describe('Authentication: login', () => {
  const { email, password } = userData;

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test.skip('should login with newly registered user', async ({ page, loginPage, request }) => {
    //Register new user
    const newUser = createRandomUser();
    await registerUser(request, newUser);
    //Login with new user
    await loginPage.loginSuccess(newUser.email, newUser.password);
    await expect(page).toHaveURL(/.*account/);
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
  });

  test('TC-UI-AUTH-01 : Successful Login @MOD-01 @TS-AUTH-01 @smoke @regresion', async ({
    page,
    loginPage,
  }) => {
    test.info().annotations.push({ type: 'test_case_id', description: 'TC-UI-AUTH-01' });
    test.info().annotations.push({
      type: 'test_case_desc',
      description: 'https://github.com/dacanass/toolshop-pw/issues/21#issue-4156485267',
    });

    await loginPage.loginSuccess(`${email[0]}`, `${password}`);
    await expect(page).toHaveURL(/.*account/);
  });

  test('TC-UI-AUTH-02: Login Failure - Invalid Password @MOD-01 @TS-AUTH-01', async ({
    loginPage,
  }) => {
    test.info().annotations.push({ type: 'test_case_id', description: 'TC-UI-AUTH-02' });
    test.info().annotations.push({
      type: 'test_case_desc',
      description: 'https://github.com/dacanass/toolshop-pw/issues/25',
    });

    await loginPage.loginInvalid('aaa', `${password}`);
    await expect(loginPage.emailErrorMessage).toContainText(errorMessage.loginEmailInvalidFormat);
  });

  test('TC-UI-AUTH-03: Validate error messages on empty fields @MOD-01 @TS-AUTH-01 @negative', async ({
    loginPage,
  }) => {
    test.info().annotations.push({ type: 'test_case_id', description: 'TC-UI-AUTH-03' });
    test.info().annotations.push({
      type: 'test_case_desc',
      description: 'https://github.com/dacanass/toolshop-pw/issues/26',
    });

    await loginPage.loginInvalid('', '');
    await expect(loginPage.emailField).toHaveAttribute('aria-invalid', 'true');
    await expect(loginPage.passwordField).toHaveAttribute('aria-invalid', 'true');
    await expect(loginPage.emailErrorMessage).toContainText(errorMessage.loginEmailEmpty);
    await expect(loginPage.passwordErrorMessage).toContainText(errorMessage.loginPasswordEmpty);
  });

  test('TC-UI-AUTH-06: Validate error message on invalid credentials @MOD-01 @TS-AUTH-01 @negative', async ({
    loginPage,
  }) => {
    test.info().annotations.push({ type: 'test_case_id', description: 'TC-UI-AUTH-06' });
    test.info().annotations.push({
      type: 'test_case_desc',
      description: 'https://github.com/dacanass/toolshop-pw/issues/29',
    });

    await loginPage.loginInvalid(`${email[1]}`, `${password}`);
    await expect(loginPage.generalErrorMessage).toBeVisible();
    await expect(loginPage.generalErrorMessage).toContainText(errorMessage.loginInvalidCredentials);
  });

  test('TC-UI-AUTH-07: Validate error message when email field is submitted empty @MOD-01 @TS-AUTH-01 @negative', async ({
    loginPage,
  }) => {
    test.info().annotations.push({ type: 'test_case_id', description: 'TC-UI-AUTH-07' });
    test.info().annotations.push({
      type: 'test_case_desc',
      description: 'https://github.com/dacanass/toolshop-pw/issues/31',
    });

    await loginPage.loginInvalid('', `${password}`);
    await expect(loginPage.emailField).toHaveAttribute('aria-invalid', 'true');
    await expect(loginPage.emailErrorMessage).toContainText(errorMessage.loginEmailEmpty);
  });

  test('TC-UI-AUTH-08: Verify validation message for empty password field during login @MOD-01 @TS-AUTH-01 @negative', async ({
    loginPage,
  }) => {
    test.info().annotations.push({ type: 'test_case_id', description: 'TC-UI-AUTH-08' });
    test.info().annotations.push({
      type: 'test_case_desc',
      description: 'https://github.com/dacanass/toolshop-pw/issues/32',
    });

    await loginPage.loginInvalid(email[0], '');
    await expect(loginPage.passwordField).toHaveAttribute('aria-invalid', 'true');
    await expect(loginPage.passwordErrorMessage).toContainText(errorMessage.loginPasswordEmpty);
  });

  test('TC-UI-AUTH-09: Verify validation message for password field below minimum length requirements @MOD-01 @TS-AUTH-01 @negative', async ({
    loginPage,
  }) => {
    test.info().annotations.push({ type: 'test_case_id', description: 'TC-UI-AUTH-09' });
    test.info().annotations.push({
      type: 'test_case_desc',
      description: 'https://github.com/dacanass/toolshop-pw/issues/33',
    });

    await loginPage.loginInvalid(email[0], 'pa');
    await expect(loginPage.passwordField).toHaveAttribute('aria-invalid', 'true');
    await expect(loginPage.passwordErrorMessage).toContainText(errorMessage.loginPasswordLenght);
  });
});
