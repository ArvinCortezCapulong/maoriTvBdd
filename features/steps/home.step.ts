 import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { expect } from '@playwright/test';

Given('I open the browser', async function(this: CustomWorld) {
  await this.openBrowser();
});

// When('I navigate to the homepage', async function(this: CustomWorld) {
//   await this.page.goto(this.parameters.baseURL);
// });
// When('I navigate to the homepage', async function(this: CustomWorld) {
//   await this.page.goto(this.parameters.baseURL, { 
//     waitUntil: 'networkidle', // Wait for network to be idle
//     timeout: 30000 // 30 second timeout
//   });
// });
When('I navigate to the homepage', {timeout: 30000}, async function(this: CustomWorld) {
  try {
    console.log(`Navigating to: ${this.parameters.baseURL}`);
    await this.page.goto(this.parameters.baseURL, { 
      waitUntil: 'domcontentloaded',
      timeout: 25000 
    });
    console.log('Navigation completed');
  } catch (error) {
    console.error('Navigation failed:', error);
    throw error;
  }
});

Then('I should see the page title', async function(this: CustomWorld) {
  const title = await this.page.title();
  expect(title).toBeTruthy();
  console.log('Page title:', title);
  await this.closeBrowser();
});
 
 
//  ? Given I open the browser
//        Undefined. Implement with the following snippet:

//          Given('I open the browser', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });

//    ? When I navigate to the homepage
//        Undefined. Implement with the following snippet:

//          When('I navigate to the homepage', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });

//    ? Then I should see the page title
//        Undefined. Implement with the following snippet:

//          Then('I should see the page title', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });