import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
import { CONFIG } from '@/config/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: path.resolve(__dirname, '../tests'),
  /* Run tests in files in parallel */
  fullyParallel: process.env.CI ? false : true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI 2 times and locally 1 time */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: CONFIG.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    /*Configuracion manual: Headless mode y definicion del atributo data-testid como data-test */
    headless: true,
    testIdAttribute: 'data-test',
    // video:'retain-on-failure',
    // screenshot:'only-on-failure'
    navigationTimeout: 30000,
    actionTimeout: 15000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'api-tests',
      testMatch: /tests\/api\/.*\.spec\.ts/,
      use: {
        baseURL: process.env.API_URL,
      },
    },
    //Storage state - Session reuse
    //donde se guardara el archivo de sesion
    {
      name: 'setup',
      testMatch: '**/*.setup.ts', //Archivo que hara el login
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      dependencies: ['setup'], //Esto asegura que el setup corra primero
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
