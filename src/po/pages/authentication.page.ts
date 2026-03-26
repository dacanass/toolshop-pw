import { Locator, Page } from '@playwright/test';
import BasePage from './base.page';

export interface UserRegistrationData {
  firstName: string;
  lastName: string;
  dob: string;
  street: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  password: string;
}

export default class AuthPage extends BasePage {
  public readonly firstNameField: Locator;
  public readonly lastNameField: Locator;
  public readonly dobField: Locator;
  public readonly streetField: Locator;
  public readonly postalCodeField: Locator;
  public readonly cityField: Locator;
  public readonly stateField: Locator;
  public readonly countrySelect: Locator;
  public readonly phoneField: Locator;
  public readonly emailField: Locator;
  public readonly passwordField: Locator;
  public readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameField = this.page.getByRole('textbox', { name: 'First name' });
    this.lastNameField = this.page.getByRole('textbox', { name: 'Last name' });
    this.dobField = this.page.getByRole('textbox', { name: 'Date of Birth *' });
    this.streetField = this.page.getByRole('textbox', { name: 'Street' });
    this.postalCodeField = this.page.getByRole('textbox', { name: 'Postal code' });
    this.cityField = this.page.getByRole('textbox', { name: 'City' });
    this.stateField = this.page.getByRole('textbox', { name: 'State' });
    this.countrySelect = this.page.getByRole('combobox', { name: 'Country' });
    this.phoneField = this.page.getByRole('textbox', { name: 'Phone' });
    this.emailField = this.page.getByRole('textbox', { name: 'Email address' });
    this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
    this.submitButton = this.page.getByRole('button', { name: 'Register' });
  }

  async fillRegisterForm(userData: UserRegistrationData) {
    await this.firstNameField.waitFor({ state: 'visible' });
    await this.firstNameField.fill(userData.firstName);
    await this.lastNameField.fill(userData.lastName);
    await this.dobField.fill(userData.dob);
    await this.streetField.fill(userData.street);
    await this.postalCodeField.fill(userData.postalCode);
    await this.cityField.fill(userData.city);
    await this.stateField.fill(userData.state);
    await this.countrySelect.selectOption(userData.country);
    await this.phoneField.fill(userData.phone);
    await this.emailField.fill(userData.email);
    await this.passwordField.fill(userData.password);
  }

  //Metodo para registrar un usuario
  async registerUser(userData: UserRegistrationData) {
    await this.fillRegisterForm(userData);
    await this.submitButton.click();
  }
}
