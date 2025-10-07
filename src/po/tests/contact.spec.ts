import { test, expect } from "./fixtures";
import { successMessage, userData } from "../utils/data";

test.describe('Contact Feature', async () => {
  const { email, firstname, lastname, message, subject, usertype } = userData;

  const { contactSentMessage } = successMessage

  test.beforeEach(async ({ contactPage }) => {
    await contactPage.goto()
  })

  test('guest user should succesfully send a contact message', async ({ page, contactPage }) => {
    await contactPage.attachFile("attach.txt")
    await contactPage.fillContactForm(usertype[0], subject[1], message, firstname, lastname, email[0])
    await expect(contactPage.formSentAlert).toBeVisible()
    const sentMessage = await contactPage.formSentAlert.textContent()
    expect(sentMessage).toContain(contactSentMessage)
  })

  // test('registered user should succesfully send a contact message', async ({ page, contactPage, loginPage }) => {

  // })


})
