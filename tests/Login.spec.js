const { test, expect } = require("@playwright/test");
test.describe.configure({ mode: "parallel" });
// test('has title', async function ({ page })  {
//   await page.goto('http://localhost:8100/');
//   //wait 5 seconds
//   
//   //input email
//   await page.locator('input[type="text"]').fill('hkfa.grassroots@ezactive.com');
//   //input password
//   await page.locator('input[type="password"]').fill('12345');
//   //click on login button
//   await page.locator('ion-button[type="submit"]').click();

//  
//   //see title HKFA
//   await expect(page).toHaveTitle(/Grassroots Football/);
//  // expect(12).toBe(12);
//  // await expect(page).toHaveTitle(/Playwright/);
// });
test("has title 1", async function ({ page }) {
  await page.goto("http://192.168.100.29:8100/");
  //wait 5 seconds
  
  //input email
  await page.locator('input[type="text"]').fill("thao@gmail.com");
  //input password
  await page.locator('input[type="password"]').fill("12345");
  //click on login button
  await page.locator('ion-button[type="submit"]').click();

  
  //see title HKFA
  await expect(page).toHaveTitle(/Grassroots Football/);

  await page.click('text="2024-2025"', { timeout:1000000 });
  

  await page.click(
    '//p[contains(text(),"Application")]/../..//div[@class="square-container"]'
  );

  await page.waitForSelector('//ion-button[contains(text(), "Register")]', {timeout:100000});
  //await page.waitForSelector('//ion-checkbox[role="checkbox"]');
  await page.click('//ion-button[contains(text(), "Register")]', {timeout:100000});
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

  await page.waitForSelector('//ion-button[contains(text(), "Register now")]', {
    timeout:100000
  });
  await page.click('//ion-button[contains(text(), "Register now")]', {
    timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector(
    '//b[contains(text(),"Training class")]/../../..//ion-button',
    { timeout:100000 }
  );
  await page.click(
    '//b[contains(text(),"Training class")]/../../..//ion-button',
    { timeout:100000 }
  );
  await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
  await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
  await page.waitForSelector('//span[contains(text(),"Select Course")]', {timeout: 60000});

  // Lấy phần tử đầu tiên và click vào nó
  const selectCourseButton = await page.$(
    '//span[contains(text(),"Select Course")]'
  ,{
    timeout:100000});
 
  await selectCourseButton.click();
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.selectOption('select[ng-reflect-name="player_id"]', { label: 'Hnnaa' });
  await page.waitForLoadState("networkidle");
  //await page.selectOption('//select[ng-reflect-name="player_id"]', "Hnnaa");
  await page.waitForLoadState("networkidle");
  await page.selectOption('select[ng-reflect-name="pib_size"]', { label: 'L' });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Confirm")]', {
    timeout:100000,
  });
  await page.click('//ion-button[contains(text(), "Confirm")]', {
    timeout:100000,
  });
 // await page.locator('ion-button[type="submit"]').click();
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Add to cart")]', {
    timeout:100000 });
  await page.click('//ion-button[contains(text(), "Add to cart")]', {
    timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");

  await page.waitForSelector('//button[contains(text(), "Check out now")]', { timeout:100000 });

  await page.click('//button[contains(text(), "Check out now")]', { timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.locator('#receiver_name').fill("yuki");
  await page.waitForLoadState("networkidle");
  //await page.scrollIntoViewIfNeeded();

  //await page.waitForXPath('//button[contains(text(), "Check out")]');
  const element = page.locator('//ion-button[contains(text(), "Check out")]');

  // Đợi cho phần tử xuất hiện
  await element.waitFor();

  // Cuộn đến phần tử đã chọn
  await element.scrollIntoViewIfNeeded();

  // Thực hiện hành động sau khi cuộn (nếu cần), ví dụ: click
  await element.click();
  // Thực hiện hành động sau khi cuộn (nếu cần), ví dụ: click
 // await element.click();


  await page.click('//ion-radio[value="Self pick up"]', { timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Check out")]', {
    timeout:100000,
  });
  await page.click('//ion-button[contains(text(), "Check out")]', {
    timeout:100000,
  });
  console.log(successMessage); // In ra thông báo để kiểm tra
});
test("has title 2", async function ({ page }) {
  await page.goto("http://192.168.100.29:8100/");
  //wait 5 seconds
  
  //input email
  await page.locator('input[type="text"]').fill("thaole123@ezactive.com");
  //input password
  await page.locator('input[type="password"]').fill("12345");
  //click on login button
  await page.locator('ion-button[type="submit"]').click();

  
  //see title HKFA
  await expect(page).toHaveTitle(/Grassroots Football/);

  await page.click('text="2024-2025"', { timeout:1000000 });
  

  await page.click(
    '//p[contains(text(),"Application")]/../..//div[@class="square-container"]'
  );

  await page.waitForSelector('//ion-button[contains(text(), "Register")]', {timeout:100000});
  //await page.waitForSelector('//ion-checkbox[role="checkbox"]');
  await page.click('//ion-button[contains(text(), "Register")]', {timeout:100000});
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

  await page.waitForSelector('//ion-button[contains(text(), "Register now")]', {
    timeout:100000
  });
  await page.click('//ion-button[contains(text(), "Register now")]', {
    timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector(
    '//b[contains(text(),"Training class")]/../../..//ion-button',
    { timeout:100000 }
  );
  await page.click(
    '//b[contains(text(),"Training class")]/../../..//ion-button',
    { timeout:100000 }
  );
  await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
  await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
  await page.waitForSelector('//span[contains(text(),"Select Course")]', {timeout: 60000});

  // Lấy phần tử đầu tiên và click vào nó
  const selectCourseButton = await page.$(
    '//span[contains(text(),"Select Course")]'
  ,{
    timeout:100000});
 
  await selectCourseButton.click();
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.selectOption('select[ng-reflect-name="player_id"]', { label: 'Hnnaa' });
  await page.waitForLoadState("networkidle");
  //await page.selectOption('//select[ng-reflect-name="player_id"]', "Hnnaa");
  await page.waitForLoadState("networkidle");
  await page.selectOption('select[ng-reflect-name="pib_size"]', { label: 'L' });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Confirm")]', {
    timeout:100000,
  });
  await page.click('//ion-button[contains(text(), "Confirm")]', {
    timeout:100000,
  });
 // await page.locator('ion-button[type="submit"]').click();
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Add to cart")]', {
    timeout:100000 });
  await page.click('//ion-button[contains(text(), "Add to cart")]', {
    timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//button[contains(text(), "Check out now")]', { timeout:100000 });

  await page.click('//button[contains(text(), "Check out now")]', { timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.locator('#receiver_name').fill("yuki");
  await page.waitForLoadState("networkidle");
  //await page.scrollIntoViewIfNeeded();
  await page.evaluate(() => {
    const element = document.querySelector('//button[contains(text(), "Check out")]'); // Thay thế bằng selector của phần tử bạn muốn cuộn đến
    if (element) {
      element.scrollIntoView();
    }
  });
  await page.click('//ion-radio[value="Self pick up"]', { timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Check out")]', {
    timeout:100000,
  });
  await page.click('//button[contains(text(), "Check out")]', {
    timeout:100000,
  });
  console.log(successMessage); // In ra thông báo để kiểm tra
});
test("has title 3", async function ({ page }) {
  await page.goto("http://192.168.100.29:8100/");
  //wait 5 seconds
  
  //input email
  await page.locator('input[type="text"]').fill("thao123@gmail.com");
  //input password
  await page.locator('input[type="password"]').fill("12345");
  //click on login button
  await page.locator('ion-button[type="submit"]').click();

  
  //see title HKFA
  await expect(page).toHaveTitle(/Grassroots Football/);

  await page.click('text="2024-2025"', { timeout:1000000 });
  

  await page.click(
    '//p[contains(text(),"Application")]/../..//div[@class="square-container"]'
  );

  await page.waitForSelector('//ion-button[contains(text(), "Register")]', {timeout:100000});
  //await page.waitForSelector('//ion-checkbox[role="checkbox"]');
  await page.click('//ion-button[contains(text(), "Register")]', {timeout:100000});
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

  await page.waitForSelector('//ion-button[contains(text(), "Register now")]', {
    timeout:100000
  });
  await page.click('//ion-button[contains(text(), "Register now")]', {
    timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector(
    '//b[contains(text(),"Training class")]/../../..//ion-button',
    { timeout:100000 }
  );
  await page.click(
    '//b[contains(text(),"Training class")]/../../..//ion-button',
    { timeout:100000 }
  );
  await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
  await page.waitForLoadState("networkidle"); // Chờ cho trạng thái tải hoàn tất
  await page.waitForSelector('//span[contains(text(),"Select Course")]', {timeout: 60000});

  // Lấy phần tử đầu tiên và click vào nó
  const selectCourseButton = await page.$(
    '//span[contains(text(),"Select Course")]'
  ,{
    timeout:100000});
 
  await selectCourseButton.click();
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.selectOption('select[ng-reflect-name="player_id"]', { label: 'Hnnaa' });
  await page.waitForLoadState("networkidle");
  //await page.selectOption('//select[ng-reflect-name="player_id"]', "Hnnaa");
  await page.waitForLoadState("networkidle");
  await page.selectOption('select[ng-reflect-name="pib_size"]', { label: 'L' });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Confirm")]', {
    timeout:100000,
  });
  await page.click('//ion-button[contains(text(), "Confirm")]', {
    timeout:100000,
  });
 // await page.locator('ion-button[type="submit"]').click();
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Add to cart")]', {
    timeout:100000 });
  await page.click('//ion-button[contains(text(), "Add to cart")]', {
    timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//button[contains(text(), "Check out now")]', { timeout:100000 });

  await page.click('//button[contains(text(), "Check out now")]', { timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.locator('#receiver_name').fill("yuki");
  await page.waitForLoadState("networkidle");
  await page.scrollIntoViewIfNeeded();
  await page.click('//ion-radio[value="Self pick up"]', { timeout:100000 });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('//ion-button[contains(text(), "Check out")]', {
    timeout:100000,
  });
  await page.click('//button[contains(text(), "Check out")]', {
    timeout:100000,
  });
  console.log(successMessage); // In ra thông báo để kiểm tra
});
