import { Locator, Page } from "@playwright/test";
import BasePage from "./base.page";


export default class LoginPage extends BasePage {

  public readonly emailField: Locator;
  public readonly passwordField: Locator;
  public readonly submit: Locator;
  public readonly emailErrorMessage: Locator;
  public readonly passwordErrorMessage: Locator;
  public readonly generalErrorMessage: Locator;

  constructor(page: Page) {
    super(page)
    this.emailField = this.page.getByTestId("email")
    this.passwordField = this.page.getByTestId("password")
    this.submit = this.page.getByRole("button", { name: "Login" })
    this.emailErrorMessage = this.page.getByTestId("email-error")
    this.passwordErrorMessage = this.page.getByTestId("password-error")
    this.generalErrorMessage = this.page.getByTestId("login-error")
  }

  async login(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submit.click()
  }

  async goto(): Promise<void> {
    await super.goto('auth/login')
  }

}