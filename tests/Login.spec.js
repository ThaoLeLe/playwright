const { test, expect } = require("@playwright/test");
const accounts = require("../resources/account.json");
for (const account of accounts) {
  test(`Test with ${account.email}`, async function ({ page }) {
    await page.goto("http://192.168.100.29:8100/", { timeout: 60000 });
    //wait 5 seconds

    //input email
    await page.locator('input[type="text"]').fill(account.email);
    //input password
    await page.locator('input[type="password"]').fill(account.password);
    //click on login button
    await page.locator('ion-button[type="submit"]').click();

    //see title HKFA
    await expect(page).toHaveTitle(/Grassroots Football/);

    await page.click('text="2024-2025"', { timeout: 1000000 });

    await page.click(
      '//p[contains(text(),"Application")]/../..//div[@class="square-container"]'
    );

    await page.waitForSelector('//ion-button[contains(text(), "Register")]', {
      timeout: 100000,
    });
    //await page.waitForSelector('//ion-checkbox[role="checkbox"]');
    await page.click('//ion-button[contains(text(), "Register")]', {
      timeout: 100000,
    });
    // await page.waitForSelector('//ion-checkbox[@role="checkbox"]', {timeout:100000});
    //   //await page.waitForSelector('//ion-checkbox[role="checkbox"]');
    //   await page.click('//ion-checkbox[@role="checkbox"]', {timeout:100000});
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
    //   await page.waitForSelector(
    //     '//ion-button[contains(text(), "Add new player")]',
    //     { timeout: 80000 }
    //   );
    //   await page.click('//ion-button[contains(text(), "Add new player")]', {
    //     timeout: 80000,
    //   });
    //   await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
    //   await page.locator('input[ng-reflect-name="surname"]').fill("Huna");
    //   //await page.waitForTimeout(2000);
    //   await page.waitForSelector('input[ng-reflect-name="other_name"]');
    //   await page.locator('input[ng-reflect-name="other_name"]').fill("Hnna");
    //   await page.locator('input[ng-reflect-name="chinese_name"]').fill("Hnnaa");
    //   await page.locator('input[ng-reflect-name="dob"]').fill("2014-07-13");
    //   await page.locator('input[ng-reflect-name="hkid_no"]').fill("Y5850052");
    // await page.waitForSelector('//ion-button[contains(text(), "Create")]');
    // await page.click('//ion-button[contains(text(), "Create")]');

    //   await page.click('text="OK"', { timeout:1000000 });

    await page.waitForSelector(
      '//ion-button[contains(text(), "Register now")]',
      {
        timeout: 100000,
      }
    );
    await page.click('//ion-button[contains(text(), "Register now")]', {
      timeout: 100000,
    });
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(
      '//b[contains(text(),"Training class")]/../../..//ion-button',
      { timeout: 100000 }
    );
    await page.click(
      '//b[contains(text(),"Training class")]/../../..//ion-button',
      { timeout: 100000 }
    );
    await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
    await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
    await page.waitForSelector('//span[contains(text(),"Select Course")]', {
      timeout: 60000,
    });

    // Lấy phần tử đầu tiên và click vào nó
    const selectCourseButton = await page.$(
      '//span[contains(text(),"Select Course")]',
      {
        timeout: 100000,
      }
    );

    await selectCourseButton.click();
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState("networkidle");
    await page.selectOption('select[ng-reflect-name="player_id"]', {
      label: "Hnnaa",
    });
    await page.waitForLoadState("networkidle");
    //await page.selectOption('//select[ng-reflect-name="player_id"]', "Hnnaa");
    await page.waitForLoadState("networkidle");
    await page.selectOption('select[ng-reflect-name="pib_size"]', {
      label: "L",
    });
    await page.waitForLoadState("networkidle");
    await page.waitForSelector('//ion-button[contains(text(), "Confirm")]', {
      timeout: 100000,
    });
    await page.click('//ion-button[contains(text(), "Confirm")]', {
      timeout: 100000,
    });
    // await page.locator('ion-button[type="submit"]').click();
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(
      '//ion-button[contains(text(), "Add to cart")]',
      {
        timeout: 100000,
      }
    );
    await page.click('//ion-button[contains(text(), "Add to cart")]', {
      timeout: 100000,
    });
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState("networkidle");

    await page.waitForSelector(
      '//button[contains(text(), "Check out now")]',
      { timeout: 100000 }
    );

    await page.click('//button[contains(text(), "Check out now")]', {
      timeout: 100000,
    });
    await page.waitForLoadState("networkidle");
    await page.locator("#receiver_name").fill("yuki");
    await page.waitForLoadState("networkidle");
    //await page.scrollIntoViewIfNeeded();

    //await page.waitForXPath('//button[contains(text(), "Check out")]');
    const element = page.locator(
      '//ion-button[contains(text(), "Check out")]'
    );

    await page.click(
      '//ion-label[contains(text(),"Elevator Access to Delivery Address?")]/..//ion-radio[@value="no"]',
      { timeout: 100000 }
    );
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(
      '//ion-button[contains(text(), "Check out")]',
      {
        timeout: 100000,
      }
    );
    await page.click('//ion-button[contains(text(), "Check out")]', {
      timeout: 100000,
    });
  });
}

