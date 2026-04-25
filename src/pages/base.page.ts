import { Page } from '@playwright/test';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    const baseUrl = process.env.BASE_URL;
    await this.page.goto(`${baseUrl}/${path}`, { waitUntil: 'domcontentloaded' });
  }
}
