const { test, expect } = require("@playwright/test");
// INVOICE_BATCH_FILE is environment variable
const invoices = require(`../resources/invoices/${process.env.INVOICE_BATCH_FILE}`);
// Shared variable to aggregate results

// Iterate over invoices and create tests
for (const invoice of invoices) {
  test(`Test with invoice ${invoice.invoice_identification}`, async ({
    page,
  }) => {
    await page.goto(invoice.url, { timeout: 100000 });

    await expect(page).toHaveURL(invoice.url);

    const inv_info = {
      invoice_id: invoice.id,
      invoice_number: invoice.invoice_number,
      invoice_url: invoice.url,
    }
    
    console.log("inv_info", inv_info);

  });
}
