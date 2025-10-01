import { Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class LoginPage extends BasePage {

  public readonly emailField: Locator;
  public readonly passwordField: Locator;
  public readonly submit: Locator;

  constructor(page: Page) {
    super(page)
    this.emailField = this.page.getByLabel("Email address")
    this.passwordField = this.page.getByLabel("Password *")
    this.submit = this.page.getByRole("button", { name: "Login" })
  }
  async login(email:string, password:string){
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submit.click()
  }

  async goto(): Promise<void> {
    super.goto('auth/login')
  }

}