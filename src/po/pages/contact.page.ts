import { Locator, Page } from "@playwright/test";
import BasePage from "./base.page";
import path from "path";

export default class ContactPage extends BasePage {

  public readonly firstName: Locator;
  public readonly lastName: Locator;
  public readonly email: Locator;
  public readonly subject: Locator;
  public readonly message: Locator;
  public readonly attachment: Locator;
  public readonly sendButton: Locator;
  public readonly formSentAlert: Locator;

  constructor(page: Page) {
    super(page)
    this.firstName = this.page.getByLabel("First name")
    this.lastName = this.page.getByLabel("Last name")
    this.email = this.page.getByLabel("Email address")
    this.subject = this.page.getByLabel("Subject")
    this.message = this.page.getByLabel("Message")
    this.attachment = this.page.getByLabel("Attachment")
    this.sendButton = this.page.getByRole("button", { name: "Send" })
    this.formSentAlert = this.page.getByRole("alert")
  }

  async fillContactForm(usertype: string, subject: string, message: string, firstname?: string, lastname?: string, email?: string) {
    if (usertype === 'guest') {
      await this.firstName.fill(firstname!)
      await this.lastName.fill(lastname!)
      await this.email.fill(email!)
    }

    await this.subject.selectOption(subject)
    await this.message.fill(message)
    await this.sendButton.click()
  }
  async attachFile(fileName: string) {
    const filePath = path.join(process.cwd(), 'src', 'po', 'utils', fileName);
    await this.attachment.setInputFiles(filePath);
  }

  async goto(): Promise<void> {
    await super.goto('contact')
  }
}