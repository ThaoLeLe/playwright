const { test, expect } = require("@playwright/test");
// INVOICE_BATCH_FILE is environment variable
const invoices = require(`../resources/invoices/invoice_batch_${process.env.INVOICE_BATCH_FILE}.json`);
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
   await page.waitForTimeout(5000);
   //verify have Please wait text
  
    await page.waitForSelector('text="PLEASE WAIT"', { timeout: 5000 });

    // Nếu có text "PLEASE WAIT", thực hiện các hành động tiếp theo
    console.log('Text "PLEASE WAIT" được tìm thấy.');

    // Thực hiện các hành động tiếp theo ở đây

  

    // Chuyển hướng đến trang lỗi
    
  

    


  });
}



