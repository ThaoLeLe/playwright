const { test, expect } = require("@playwright/test");
// INVOICE_BATCH_FILE is environment variable
const invoices = require(`../resources/invoices/${process.env.INVOICE_BATCH_FILE}`);
// Shared variable to aggregate results
const aggregatedInformation = {
  page_success: 0,
  waiting: 0,
  error: 0,
};

// Iterate over invoices and create tests
for (const invoice of invoices) {
  test(`Test with invoice ${invoice.invoice_identification}`, async ({ page }) => {
    await page.goto(invoice.url, { timeout: 100000 });

    try {
      const information = {
        page_success: 0,
        waiting: 0,
        error: 0,
      };

      const isPleaseWaitVisible = await page.isVisible('//h3[contains(text(),"PLEASE WAIT")]', { timeout: 100000 });
      if (isPleaseWaitVisible) {
        console.log("Trang hang doi");
        information.waiting++;
      } else {
        const iframe = await page.frameLocator("iframe");
        if (iframe) {
          const payForm = await iframe.locator("#payForm");
          if (payForm) {
            console.log("Trang thanh toan", payForm);
            information.page_success++;
          } else {
            console.error("Trang loi");
            information.error++;
          }
        } else {
          console.error("Trang loi");
          information.error++;
        }
      }

      // Aggregate the information
      aggregatedInformation.page_success += information.page_success;
      aggregatedInformation.waiting += information.waiting;
      aggregatedInformation.error += information.error;

      console.log(`Information: ${JSON.stringify(information)}`);
    } catch (e) {
      console.error("Đã xảy ra lỗi: ", e);
    }
  });
}


