import { Locator, Page } from '@playwright/test';
import BasePage from './base.page.js';
import { User } from '@/lib/datafactory/userModel.js';
import { ERRORS } from '@/constants/messages.js';

export default class AuthPage extends BasePage {
  public readonly firstNameField: Locator;
  public readonly firstNameAlert: Locator;
  public readonly lastNameField: Locator;
  public readonly lastNameAlert: Locator;
  public readonly dobField: Locator;
  public readonly dobFieldAlertInvalid: Locator;
  public readonly dobFieldAlert: Locator;
  public readonly streetField: Locator;
  public readonly streetAlert: Locator;
  public readonly postalCodeField: Locator;
  public readonly postalCodeAlert: Locator;
  public readonly houseNumberField: Locator;
  public readonly houseNumberAlert: Locator;
  public readonly cityField: Locator;
  public readonly cityAlert: Locator;
  public readonly stateField: Locator;
  public readonly stateAlert: Locator;
  public readonly countrySelect: Locator;
  public readonly countryAlert: Locator;
  public readonly phoneField: Locator;
  public readonly phoneAlert: Locator;
  public readonly emailField: Locator;
  public readonly emailAlert: Locator;
  public readonly passwordField: Locator;
  public readonly passwordAlert: Locator;
  public readonly passwordAlertMin: Locator;
  public readonly passwordAlertInvalid: Locator;
  public readonly submitButton: Locator;
  public readonly formAlert: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameField = this.page.getByRole('textbox', { name: 'First name' });
    this.lastNameField = this.page.getByRole('textbox', { name: 'Last name' });
    this.dobField = this.page.getByRole('textbox', { name: 'Date of Birth *' });
    this.streetField = this.page.getByRole('textbox', { name: 'Street' });
    this.postalCodeField = this.page.getByRole('textbox', { name: 'Postal code' });
    this.houseNumberField = this.page.getByRole('textbox', { name: 'House number' });
    this.cityField = this.page.getByRole('textbox', { name: 'City' });
    this.stateField = this.page.getByRole('textbox', { name: 'State' });
    this.countrySelect = this.page.getByRole('combobox', { name: 'Country' });
    this.phoneField = this.page.getByRole('textbox', { name: 'Phone' });
    this.emailField = this.page.getByRole('textbox', { name: 'Email address' });
    this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
    this.submitButton = this.page.getByRole('button', { name: 'Register' });

    this.firstNameAlert = this.page.getByText(ERRORS.AUTH.FIRSTNAME_EMPTY);
    this.lastNameAlert = this.page.getByText(ERRORS.AUTH.LASTNAME_EMPTY);
    this.dobFieldAlertInvalid = this.page.getByText(ERRORS.AUTH.DOB_INVALID);
    this.dobFieldAlert = this.page.getByText(ERRORS.AUTH.DOB_EMPTY);
    this.streetAlert = this.page.getByText(ERRORS.AUTH.STREET_EMPTY);
    this.postalCodeAlert = this.page.getByText(ERRORS.AUTH.POSTCODE_EMPTY);
    this.houseNumberAlert = this.page.getByText(ERRORS.AUTH.HOUSE_NUMBER_EMPTY);
    this.cityAlert = this.page.getByText(ERRORS.AUTH.CITY_EMPTY);
    this.stateAlert = this.page.getByText(ERRORS.AUTH.STATE_EMPTY);
    this.countryAlert = this.page.getByText(ERRORS.AUTH.COUNTRY_EMPTY);
    this.phoneAlert = this.page.getByText(ERRORS.AUTH.PHONE_EMPTY);
    this.emailAlert = this.page.getByText(ERRORS.AUTH.EMAIL_EMPTY);
    this.passwordAlert = this.page.getByText(ERRORS.AUTH.PASSWORD_EMPTY);
    this.passwordAlertMin = this.page.getByText(ERRORS.AUTH.PASSWORD_MIN_LENGHT);
    this.passwordAlertInvalid = this.page.getByText(ERRORS.AUTH.PASSWORD_INVALID_CHAR);
    this.formAlert = this.page.getByText(ERRORS.AUTH.EMAIL_ALREADY_EXISTS);
  }

  async fillRegisterForm(userData: User) {
    await this.firstNameField.waitFor({ state: 'visible' });
    await this.firstNameField.fill(userData.first_name);
    await this.lastNameField.fill(userData.last_name);
    await this.dobField.fill(userData.dob);
    await this.streetField.fill(userData.address.street);
    await this.postalCodeField.fill(userData.address.postal_code);
    await this.houseNumberField.fill(userData.address.house_number);
    await this.cityField.fill(userData.address.city);
    await this.stateField.fill(userData.address.state);
    await this.countrySelect.click();
    await this.countrySelect.selectOption(userData.address.country);
    await this.phoneField.fill(userData.phone);
    await this.emailField.fill(userData.email);
    await this.passwordField.fill(userData.password);
  }

  //Metodo para registrar un usuario
  async registerUser(userData: User) {
    await this.fillRegisterForm(userData);
    await this.submitButton.click();
  }

  async goto(): Promise<void> {
    await super.goto('auth/register');
  }
}
