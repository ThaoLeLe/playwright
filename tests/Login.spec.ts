const { test, expect } = require("@playwright/test");
const invoices = require("../resources/invoices.json");


for (const invoice of invoices) {
  test(`Test with invoice ${invoice.invoice_identification}`, async function ({
    page,
  }) {
    await page.goto(invoice.url, { timeout: 100000 });
    //wait 5 seconds
    try {

      let information = {
        page_success: 0,
        waiting: 0,
        error: 0,
      };
      

      const isPleaseWaitVisible = await page.isVisible(
        '//h3[contains(text(),"PLEASE WAIT")]', { timeout: 100000 }
      );
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
        }else{
          console.error("Trang loi");
          information.error++;
        }
      }

      console.log(`Information: ${JSON.stringify(information)}`);
    } catch (e) {
      console.error("Đã xảy ra lỗi: ", e);
    }
  });
}
