import { test, expect } from './fixtures';


test.describe('DemoBlaze Navigation', () => {
  // 1. Pide 'homePage' como si fuera una fixture nativa de Playwright.
  //    También puedes seguir pidiendo 'page' si la necesitas directamente.
  test('should navigate to the home page using a fixture', async ({ page, homePage }) => {

    // 2. Usa el método 'goto' de la instancia 'homePage' que Playwright te ha dado.
    //    Ya no hay que hacer new HomePage(page) en cada test.
    await homePage.goto('index.html');

    // 3. Realiza aserciones para verificar que la acción fue exitosa.
    await expect(page).toHaveURL('https://practicesoftwaretesting.com');
    await expect(homePage.logo).toBeVisible();
  });

});