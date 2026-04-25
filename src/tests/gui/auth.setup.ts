import { test as setup, expect } from '@playwright/test';
import LoginPage from '@/pages/login.page.js';
import path from 'path';

//Storage state - session reuse
setup('Create user auth', async ({ page }) => {
  const email = process.env.CUSTOMER_EMAIL!;
  const password = process.env.CUSTOMER_PASSWORD!;
  const authFile = path.resolve('.auth/user.json');

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await page.waitForLoadState('networkidle');

  await loginPage.loginSuccess(email, password);

  await expect(page.getByTestId('nav-menu')).toBeVisible();

  await page.context().storageState({ path: authFile });
});
