import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { expect } from '@playwright/test';


Then('I should see the page title', async function(this: CustomWorld) {
  const title = await this.page.title();
  expect(title).toBeTruthy();
  console.log('Page title:', title);
  await this.closeBrowser();
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
// When('I navigate to the homepage', {timeout: 30000}, async function(this: CustomWorld) {
//   try {
//     console.log(`Navigating to: ${this.parameters.baseURL}`);
//     await this.page.goto(this.parameters.baseURL, { 
//       waitUntil: 'domcontentloaded',
//       timeout: 25000 
//     });
//     console.log('Navigation completed');
//   } catch (error) {
//     console.error('Navigation failed:', error);
//     throw error;
//   }
// });

 