import { test, expect } from "./fixtures";
import { successMessage, userData } from "../utils/data";

test.describe('Contact Feature', async () => {
  const { email, password, firstname, lastname, message, subject, usertype } = userData;

  const { contactSentMessage } = successMessage

  // test.beforeEach(async ({ contactPage }) => {
  //   await contactPage.goto()
  // })

  test('guest user should succesfully send a contact message', async ({ page, contactPage }) => {
    await contactPage.goto()
    await contactPage.attachFile("attach.txt")
    await contactPage.fillContactForm(usertype[0], subject[1], message, firstname, lastname, email[0])
    await expect(contactPage.formSentAlert).toBeVisible()
    const sentMessage = await contactPage.formSentAlert.textContent()
    expect(sentMessage).toContain(contactSentMessage)
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
    expect(sentMessage).toContain(contactSentMessage)
  })


})
