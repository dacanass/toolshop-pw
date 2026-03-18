import { expect, Locator, Page } from '@playwright/test';
import BasePage from './base.page';

export default class LoginPage extends BasePage {
  public readonly emailField: Locator;
  public readonly passwordField: Locator;
  public readonly submit: Locator;
  public readonly emailErrorMessage: Locator;
  public readonly passwordErrorMessage: Locator;
  public readonly generalErrorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.emailField = this.page.getByTestId('email');
    this.passwordField = this.page.getByTestId('password');
    this.submit = this.page.getByRole('button', { name: 'Login' });
    this.emailErrorMessage = this.page.getByTestId('email-error');
    this.passwordErrorMessage = this.page.getByTestId('password-error');
    this.generalErrorMessage = this.page.getByTestId('login-error');
  }

  // Método para flujos exitosos
  async loginSuccess(email: string, password: string) {
    await this.fillLoginForm(email, password);
    await this.submit.click();
    await this.submit.waitFor({ state: 'hidden' });  
}

  // Método para flujos de error
  async loginInvalid(email: string, password: string) {
    await this.fillLoginForm(email, password);
    await this.submit.click();
    // Aquí no esperamos navegación, porque sabemos que no ocurrirá
}


  // Método privado para no repetir código de llenado (DRY)
  private async fillLoginForm(email: string, password: string) {
    await this.emailField.waitFor({state:'visible'});
    await this.emailField.fill(email);
    await this.passwordField.waitFor({state:'visible'});
    await expect(this.submit).toBeEnabled();
    await this.passwordField.fill(password);
}

  async goto(): Promise<void> {
    await super.goto('auth/login');
  }
}
