import { test, expect } from "./fixtures";
import { errorMessage, successMessage, userData } from "../utils/data";

test.describe('Contact Feature', async () => {
  const { email, password, firstname, lastname, message, subject, usertype } = userData;

  const { contactSentMessage } = successMessage;

  const { contactfirstnameEmpty, contactlastnameEmpty, contactemailEmpty, contactmessageEmpty } = errorMessage;

  test('guest user should succesfully send a contact message', async ({ page, contactPage }) => {
    await contactPage.goto()
    await contactPage.attachFile("attach.txt")
    await contactPage.fillContactForm(usertype[0], subject[1], message, firstname, lastname, email[0])
    await expect(contactPage.formSentAlert).toHaveText(contactSentMessage)
  })

  test('registered user should succesfully send a contact message', async ({ page, contactPage, loginPage }) => {
    await loginPage.goto()
    await loginPage.login(email[0], password)
    await expect(page).toHaveURL('account')

    await contactPage.goto()
    await expect(contactPage.greetings).toBeVisible()
    await contactPage.attachFile("attach.txt")
    await contactPage.fillContactForm(usertype[1], subject[1], message)
    await expect(contactPage.formSentAlert).toBeVisible()
    const sentMessage = await contactPage.formSentAlert.textContent()
    await expect(sentMessage).toContain(contactSentMessage)
  })

  test('should display error messages when fields are empty', async ({ contactPage }) => {
    await contactPage.goto()
    await contactPage.sendButton.click()
    await expect(contactPage.firstnameAlert).toHaveText(contactfirstnameEmpty)
    await expect(contactPage.lastnameAlert).toHaveText(contactlastnameEmpty)
    await expect(contactPage.emailAlert).toHaveText(contactemailEmpty)
    await expect(contactPage.messageAlert).toHaveText(contactmessageEmpty)
  })

})
