import { test as base } from '@playwright/test';
import HomePage from '../pages/home.page';

// 1. Define los tipos para tus fixtures.
//    Esto le da a TypeScript el autocompletado.
type MyFixtures = {
  homePage: HomePage;
};

// 2. Extiende el 'test' base de Playwright con tus propias fixtures.
export const test = base.extend<MyFixtures>({
  // 3. Define la fixture 'homePage'.
  homePage: async ({ page }, use) => {
    // 4. Crea la instancia del Page Object aquí, una sola vez.
    await use(new HomePage(page));
  },
});

export { expect } from '@playwright/test';

/**
 * ¿Qué hace este código?

1. Importamos el "test" base de Playwright.
2. Definimos un nuevo test que "sabe" cómo crear una instancia de HomePage.
3. Cada vez que un test pida la fixture homePage, Playwright ejecutará esta función, creará un new HomePage(page) y se lo pasará al test.
 */