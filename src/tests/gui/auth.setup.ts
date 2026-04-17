import { test as setup, expect } from '@playwright/test';
import LoginPage from '@/po/pages/login.page.js';
import { CONFIG } from '@/config/env.js';
import path from 'path';

//Storage state - session reuse
setup('Create user auth', async ({ page }) => {
  const email = CONFIG.CUSTOMER_EMAIL;
  const password = CONFIG.CUSTOMER_PASSWORD;
  const authFile = path.resolve('.auth/user.json');

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await page.waitForLoadState('networkidle');

  await loginPage.loginSuccess(email, password);

  await expect(page.getByTestId('nav-menu')).toBeVisible();

  await page.context().storageState({ path: authFile });
});
