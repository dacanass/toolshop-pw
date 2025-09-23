import { Locator, Page } from '@playwright/test';
import BasePage from './base.page';

export default class HomePage extends BasePage {
  // Puedes definir localizadores específicos de esta página aquí
  public readonly categoriesTitle: Locator;

  constructor(page: Page) {
    // 1. Llama al constructor de la clase padre (BasePage)
    //    Esto es crucial para que 'this.page' se inicialice correctamente.
    super(page);

    // 2. Inicializa los localizadores de HomePage
    this.categoriesTitle = this.page.locator('#cat');
  }
}
