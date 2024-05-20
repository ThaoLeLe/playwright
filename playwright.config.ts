import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 100 * 1000,
  expect: {
      timeout: 100*1000
  },
  fullyParallel: true,
  workers: 50,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 4 : 0,
  reporter: 'list',
  use: {
      actionTimeout: 0,
      trace: 'retain-on-failure'
  },
  projects: [
      {
          name: 'chrome web',
          use: {
              ...devices['Desktop Chrome']
          }
      }
  ]
})
