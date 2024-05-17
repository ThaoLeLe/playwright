// import { test, expect } from '@playwright/test';
//const { chromium } = require('playwright');

import test from "@playwright/test";
// lengthoginPage: LoginPage;

//   test.beforeEach(async ({ page }) => {
//     // Go to the starting url before each test.
//    // await page.goto('http://localhost:8100/', { timeout: 60000 }); // Set timeout to 60 seconds
//   });

//   test.afterEach(async ({ page }) => {
// });
test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8100/');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
