const { test, expect } = require("@playwright/test");
const invoices = require("../resources/invoices.json");

var information = {
  page_success: 0,
  waiting: 0,
  error: 0
};
for (const invoice of invoices) {
  test(`Test with invoice ${invoice.invoice_identification}`, async function ({ page }) {
    await page.goto(invoice.url, { timeout: 100000 });
    //wait 5 seconds
    try {
      // Kiểm tra xem biểu mẫu với id="payForm" có hiển thị trên trang hay không
      const isPayFormVisible = await page.isVisible('//form[@id="payForm"]');
      if (isPayFormVisible) {
        console.log('Trang thanh toan');
        information.page_success++;
      } else {
        // Nếu không tìm thấy biểu mẫu thanh toán, kiểm tra trang "PLEASE WAIT"
        const isPleaseWaitVisible = await page.isVisible('//h3[contains(text(),"PLEASE WAIT")]');
        if (isPleaseWaitVisible) {
          console.log('Trang hang doi');
          const content = await page.textContent('p#index');
          information.waiting++;
        } else {
          console.error('Trang loi');
          information.error++;
        }

        console.log(`Information: ${JSON.stringify(information)}`);
      }
    } catch (e) {
      console.error('Đã xảy ra lỗi: ', e);
    }


   








  });
}

