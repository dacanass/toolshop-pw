import { createRandomUser } from '@/lib/datafactory/userModel.js';
import { expect, test } from '@/tests/gui/fixtures.js';
import { ERRORS } from '@/constants/messages.js';
import { CONFIG } from '@/config/env.js';

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

  test('TC-UI-AUTH-11 - Validate inline error messages for all mandatory fields on empty submission @smoke, @regresion, @negative', async ({
    authPage,
  }) => {
    await authPage.submitButton.click();
    await expect(authPage.firstNameAlert).toContainText(ERRORS.AUTH.FIRSTNAME_EMPTY);
    await expect(authPage.lastNameAlert).toContainText(ERRORS.AUTH.LASTNAME_EMPTY);
    await expect(authPage.dobFieldAlert).toContainText(ERRORS.AUTH.DOB_EMPTY);
    await expect(authPage.streetAlert).toContainText(ERRORS.AUTH.STREET_EMPTY);
    await expect(authPage.postalCodeAlert).toContainText(ERRORS.AUTH.POSTCODE_EMPTY);
    await expect(authPage.cityAlert).toContainText(ERRORS.AUTH.CITY_EMPTY);
    await expect(authPage.stateAlert).toContainText(ERRORS.AUTH.STATE_EMPTY);
    await expect(authPage.countryAlert).toContainText(ERRORS.AUTH.COUNTRY_EMPTY);
    await expect(authPage.phoneAlert).toContainText(ERRORS.AUTH.PHONE_EMPTY);
    await expect(authPage.emailAlert).toContainText(ERRORS.AUTH.EMAIL_EMPTY);
    await expect(authPage.passwordAlert).toContainText(ERRORS.AUTH.PASSWORD_EMPTY);
  });

  test('TC-UI-AUTH-12 - Validate error message for existing email @smoke @negative', async ({
    authPage,
  }) => {
    const newUser = createRandomUser();
    newUser.email = CONFIG.CUSTOMER_EMAIL;

    await authPage.registerUser(newUser);
    await expect(authPage.formAlert).toContainText(ERRORS.AUTH.EMAIL_ALREADY_EXISTS);
  });
});
