import { test, expect } from '@/tests/gui/fixtures.js';
import { errorMessage, successMessage, userData } from '@/po/utils/data.js';

test.describe('Contact Feature', async () => {
  const { email, firstname, lastname, message, subject, usertype } = userData;

  const { contactSentMessage } = successMessage;

  const {
    contactfirstnameEmpty,
    contactlastnameEmpty,
    contactemailEmpty,
    contactmessageEmpty,
    contactemailInvalid,
    contactmessageInvalid,
  } = errorMessage;

  test('guest user should successfully send a contact message', async ({ contactPage }) => {
    await contactPage.goto();
    await contactPage.attachFile('attach.txt');
    await contactPage.fillContactForm(
      usertype[0],
      subject[1],
      message,
      firstname,
      lastname,
      email[0],
    );
    await contactPage.submitContactForm();

    await expect(contactPage.formSentAlert).toBeVisible({ timeout: 10000 });
    await expect(contactPage.formSentAlert).toContainText(contactSentMessage);
  });

  test.describe('Authenticated Contact', () => {
    // Indicamos manualmente que este bloque usará la sesión guardada
    test.use({ storageState: '.auth/user.json' });

    test('registered user should successfully send a contact message', async ({ contactPage }) => {
      await contactPage.goto();
      await expect(contactPage.greetings).toBeVisible();
      await contactPage.attachFile('attach.txt');
      await contactPage.fillContactForm(usertype[1], subject[1], message);
      await contactPage.submitContactForm();
      await expect(contactPage.formSentAlert).toBeVisible({ timeout: 10000 });
      await expect(contactPage.formSentAlert).toContainText(contactSentMessage);
    });
  });

  test('should display error messages when fields are empty', async ({ contactPage }) => {
    await contactPage.goto();
    await contactPage.sendButton.click();
    await expect(contactPage.firstnameAlert).toHaveText(contactfirstnameEmpty);
    await expect(contactPage.lastnameAlert).toHaveText(contactlastnameEmpty);
    await expect(contactPage.emailAlert).toHaveText(contactemailEmpty);
    await expect(contactPage.messageAlert).toHaveText(contactmessageEmpty);
  });

  test('should display an error for invalid email format', async ({ contactPage }) => {
    await contactPage.goto();
    await contactPage.email.fill('a');
    await contactPage.sendButton.click();
    await expect(contactPage.emailAlert).toHaveText(contactemailInvalid);
  });

  test('should display an error when the message is too short', async ({ contactPage }) => {
    await contactPage.goto();
    await contactPage.message.fill('a');
    await contactPage.sendButton.click();
    await expect(contactPage.messageAlert).toHaveText(contactmessageInvalid);
  });
});
