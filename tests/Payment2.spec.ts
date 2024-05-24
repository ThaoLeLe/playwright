const { test, expect } = require("@playwright/test");
// INVOICE_BATCH_FILE is environment variable
const invoices = require(`../resources/invoices2.json`);
// Shared variable to aggregate results

// Iterate over invoices and create tests
for (const invoice of invoices) {
  test(`Test with invoice ${invoice.invoice_identification}`, async ({
    page,
  }) => {
    await page.goto(invoice.url);

    const inv_info = {
      invoice_id: invoice.id,
      invoice_number: invoice.invoice_number,
      invoice_url: invoice.url,
    }
    
    console.log("inv_info", inv_info);
    //wait 10s
    await page.waitForTimeout(10000);
    
   
//EXPECT NOT VISIBLE TEXT "PLEASE WAIT"
    await expect(page.locator('text="PLEASE WAIT"')).not.toBeVisible();
   
  });
}



