import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('I open the browser', async function(this: CustomWorld) {
  await this.openBrowser();
});

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
