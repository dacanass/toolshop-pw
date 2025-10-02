import { Page } from '@playwright/test';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    // Usa la variable de entorno BASE_URL si está definida, si no, usa la URL por defecto.
    const baseUrl = process.env.BASE_URL || 'https://practicesoftwaretesting.com';
    await this.page.goto(`${baseUrl}/${path}`);
  }

}
