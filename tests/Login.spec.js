const { test, expect } = require("@playwright/test");
const invoices = require("../resources/invoices.json");
for (const invoice of invoices) {
  test(`Test with invoice ${invoice.invoice_identification}`, async function ({ page }) {
    await page.goto(invoice.url, { timeout: 100000 });
    //wait 5 seconds
    try {
      // Kiểm tra xem biểu mẫu với id="payForm" có hiển thị trên trang hay không
      const isPayFormVisible = await page.isVisible('//form[@id="payForm"]');
      if (isPayFormVisible) {
        console.log('Biểu mẫu thanh toán đã hiển thị.');
      } else {
        // Nếu không tìm thấy biểu mẫu thanh toán, kiểm tra trang "PLEASE WAIT"
        const isPleaseWaitVisible = await page.isVisible('//h3[contains(text(),"PLEASE WAIT")]');
        if (isPleaseWaitVisible) {
          console.log('Trang hiện hàng chờ của hệ thống đã được hiển thị.');
        } else {
          console.error('Không tìm thấy trang thanh toán hay trang hàng chờ.');
        }
      }
    } catch (e) {
      console.error('Đã xảy ra lỗi: ', e);
    }


   








  });
}

