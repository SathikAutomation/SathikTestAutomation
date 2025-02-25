const { test: baseTest, chromium } = require('@playwright/test');
const LoginPage = require('../Pages/login');
const HomePage = require('../Pages/HomePage');

const test = baseTest.extend({
  loginpage: async ({ baseURL }, use) => {
    const browser = await chromium.launch({ headless: false });
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    console.log(`Navigating to ${baseURL}`);

    try {
      await page.goto(baseURL, { timeout: 150000 });
    } catch (error) {
      console.error(`Failed to navigate to ${baseURL}:`, error);
      await browser.close();
      throw error;
    }

    const loginpage = new LoginPage(page);

    await closeAllModals(page);

    if (baseURL.includes('spanx-dev.myshopify.com') || baseURL.includes('spanx-ca-dev.myshopify.com')) {
      const passwordInput = baseURL.includes('spanx-dev.myshopify.com') ? 'shonge' : 'naesho';
      console.log(`Filling password field with: ${passwordInput}`);
         
      await loginpage.PermissionPasswordField().fill(passwordInput);
      await loginpage.PermissionPasswordField().press('Enter');
      await page.waitForTimeout(2000);
      await closeAllModals(page);
    }

    await use(loginpage);

    console.log('Test finished. Keeping browser open...');
   // await page.pause();
  },

  homepage: async ({ loginpage }, use) => {
    const homepage = new HomePage(loginpage.page); 
    await use(homepage);
  },
});


async function closeAllModals(page) {
  const modals = [
    page.getByRole('button', { name: 'Close Modal' }),
    page.locator('button:has-text("Close Modal")'),
    page.locator("//*[text()='Close Modal']"),
    page.locator("//*[@id='closeIconContainer']")
  ];

  for (const modal of modals) {
    if (await modal.isVisible()) {
      console.log('Closing pop-up...');
      await modal.click();
      await page.waitForTimeout(1000);
    }
  }


  const iframeLocator = page.locator('iframe[title="Sign Up via Text for Offers"]');
  if (await iframeLocator.count() > 0) {
    console.log('Found iframe popup. Attempting to close it.');
    const frame = await iframeLocator.first().contentFrame();
    if (frame) {
      const closeIcon = frame.getByTestId('closeIcon');
      if (await closeIcon.isVisible()) {
        console.log('Closing iframe pop-up...');
        await closeIcon.click();
        await page.waitForTimeout(1000);
      } else {
        console.log('Close icon not found in iframe.');
      }
    } else {
      console.log('Failed to get iframe content.');
    }
  }
}

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status === 'failed') {
    console.warn(`Test failed: ${testInfo.title}. Capturing trace.`);

    await testInfo.attachments.push({
      name: `trace-${testInfo.title}`,
      path: `trace-${testInfo.title}.zip`,
      contentType: 'application/zip',
    });
  }
});

module.exports = test;








// await page.close();
// await browserContext.close();
// await browser.close();
