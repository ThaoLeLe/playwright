const { test, expect } = require("@playwright/test");
const invoices = require("../resources/invoices.json");
for (const invoice of invoices) {
  test(`Test with invoice ${invoice.invoice_identification}`, async function ({ page }) {
    await page.goto(invoice.url, { timeout: 100000 });
    //wait 5 seconds
    try {
      // Kiểm tra xem biểu mẫu với id="payForm" có tồn tại trên trang hay không
      await page.waitForSelector('form#payForm', { timeout: 5000 });
      console.log('Trang thanh toán đã được hiển thị.');
    } catch (e) {
      console.log('Không tìm thấy biểu mẫu thanh toán.');
      await page.waitForSelector('//h3[contains(text(),"PLEASE WAIT")]', { timeout: 5000 });
    }
    
    //verify page load have //form[@id="payForm"]


   








  });
}

