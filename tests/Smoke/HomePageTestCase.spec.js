
const test = require('../common/commonFunction');
const { expect } = require('@playwright/test');
const inputData = require('../../InputData.json');




test('Verify that the user can click on the Collections header link and ensure they are successfully redirected to the Collections page', async ({ loginpage,homepage, page, baseURL }) => {

// await homepage.CollectionHeaderLink().click(); 

// await page.waitForLoadState('domcontentloaded');

// const currentURL = page.url();

// console.log('Current Page URL:', currentURL);

// expect(currentURL).toBe('currentURL');

});


// test('Verify if the user can log in with valid credentials and then sign out', async ({ loginpage,homepage, baseURL }) => {
    
//     // if (baseURL.includes('spanx.com') || baseURL.includes('spanx-dev.myshopify.com')) {
//     //     await loginpage.AcceptCookiesButton().click();
//     // } else {
//     //     console.log("Skipping 'Accept Cookies' for CA site.");
//     // }
//     // await homepage.ProfileIcon().scrollIntoViewIfNeeded().click();

//     // await homepage.SignInButton().click();
//     // await loginpage.EmailField().fill(inputData.Login.Email);
//     // await loginpage.PasswordField().fill(inputData.Login.Password);
//     // await loginpage.LoginButton().click();
    
// });