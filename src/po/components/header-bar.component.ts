import { Locator, Page } from '@playwright/test';
import BasePage from '../pages/base.page';

export default class HeaderbarComponent extends BasePage {
  public readonly userMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.userMenu = this.page.getByRole('menubar', { name: 'Main menu' });
  }
}
