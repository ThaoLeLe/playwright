const { test, expect } = require("@playwright/test");
const axios = require('axios');
// INVOICE_BATCH_FILE is environment variable
const invoices = require(`../resources/invoices/${process.env.INVOICE_BATCH_FILE}`);
// Shared variable to aggregate results

async function sendSlackMessage( message: string) {
  const url = "https://slack.com/api/chat.postMessage";
  const headers = {
      "Authorization": "Bearer xoxb-6519771859383-7087657215015-iWDfftKGa81LAgIzlPBGV9WA",
      "Content-Type": "application/json"
  };
  const data = {
      "channel": '#playwright',
      "text": message
  };

  try {
      const response = await axios.post(url, data, { headers });
      if (response.status === 200) {
          console.log("Message sent successfully!");
      } else {
          console.error("Failed to send message. Error:", response.data);
      }
  } catch (error) {
      console.error("Failed to send message. Error:", error);
  }
}

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
            await sendSlackMessage( `Trang thanh toan: ${invoice.url} success`);

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
      console.log(`Information: ${JSON.stringify(information)}`);
    } catch (e) {
      console.error("Đã xảy ra lỗi: ", e);
    }
  });
}


