import { Page } from '@playwright/test';
import { CONFIG } from '@/config/env.js';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    // Usa la variable de entorno BASE_URL si está definida, si no, usa la URL por defecto.
    const baseUrl = CONFIG.BASE_URL;
    await this.page.goto(`${baseUrl}/${path}`, { waitUntil: 'domcontentloaded' });
  }
}
