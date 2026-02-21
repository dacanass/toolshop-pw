import { test as base } from '@playwright/test';
import HomePage from '../pages/home.page';
import HeaderbarComponent from '../components/header-bar.component';
import LoginPage from '../pages/login.page';
import ContactPage from '../pages/contact.page';

// 1. Define los tipos para tus fixtures: {nombreFixture: nombreClase}
//    Esto le da a TypeScript el autocompletado.
type MyFixtures = {
  homePage: HomePage;
  headerBar: HeaderbarComponent;
  loginPage: LoginPage;
  contactPage: ContactPage;
};

// 2. Extiende el 'test' base de Playwright con tus propias fixtures.
export const test = base.extend<MyFixtures>({
  // 3. Define la fixture 'homePage'.
  homePage: async ({ page }, use) => {
    // 4. Crea la instancia del Page Object aquí, una sola vez.
    await use(new HomePage(page));
  },
  headerBar: async ({ page }, use) => {
    await use(new HeaderbarComponent(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
});

export { expect } from '@playwright/test';

/**
 * ¿Qué hace este código?

1. Importamos el "test" base de Playwright.
2. Definimos un nuevo test que "sabe" cómo crear una instancia de HomePage.
3. Cada vez que un test pida la fixture homePage, Playwright ejecutará esta función, creará un "new HomePage(page)" y se lo pasará al test.
 */
