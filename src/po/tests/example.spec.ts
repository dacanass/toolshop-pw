import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('DemoBlaze Navigation', () => {
  
  test('should navigate to the home page using BasePage method', async ({ page }) => {
    // 1. Crea una instancia de tu página específica (HomePage)
    //    Le pasas el objeto 'page' que Playwright te proporciona.
    const homePage = new HomePage(page);

    // 2. Llama al método 'goto' que está definido en BasePage.
    //    El test es limpio y legible: "ve a la página de inicio".
    await homePage.goto('index.html');

    // 3. Realiza aserciones para verificar que la acción fue exitosa.
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect(homePage.categoriesTitle).toBeVisible();
  });

});
