import { Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class ContactPage extends BasePage {

  public readonly firstName: Locator;
  public readonly lastName: Locator;
  public readonly email: Locator;
  public readonly subject: Locator;
  public readonly message: Locator;
  public readonly attachment: Locator;
  public readonly sendButton: Locator;

  constructor(page: Page) {
    super(page)
    this.firstName = this.page.getByLabel("First name")
    this.lastName = this.page.getByLabel("Last name")
    this.email = this.page.getByLabel("Email address")
    this.subject = this.page.getByLabel("Subject")
    this.message = this.page.getByLabel("Message")
    this.attachment = this.page.getByLabel("Attachment")
    this.sendButton = this.page.getByRole("button", { name: "Send" })
  }
}