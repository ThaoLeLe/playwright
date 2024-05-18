const { test, expect } = require("@playwright/test");
const invoices = require("../resources/invoices.json");
for (const invoice of invoices) {
  test(`Test with invoice ${invoice.invoice_identification}`, async function ({ page }) {
    await page.goto(invoice.url, { timeout: 100000 });
    //wait 5 seconds

  });
}

