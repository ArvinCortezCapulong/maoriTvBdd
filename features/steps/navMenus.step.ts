import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { expect } from '@playwright/test';


Then('I can see the following navigation menus:', {timeout: 30000}, async function(this: CustomWorld, dataTable) {
  const expectedMenus = dataTable.raw().flat();
  
  // Debug: Let's see what's actually on the page
  await this.page.waitForLoadState('networkidle');
  console.log('Current URL:', this.page.url());
  
  // Try multiple selectors for navigation
  const navSelectors = [
    'nav a',
    'nav button', 
    'nav li',
    '[role="navigation"] a',
    '.nav a',
    '.navigation a',
    'header a',
    '.menu a'
  ];
  
  for (const menuItem of expectedMenus) {
    console.log(`Looking for menu item: ${menuItem}`);
    let found = false;
    
    for (const selector of navSelectors) {
      try {
        const menuElement = this.page.locator(`${selector}:has-text("${menuItem}")`);
        const count = await menuElement.count();
        if (count > 0) {
          await expect(menuElement.first()).toBeVisible({ timeout: 5000 });
          console.log(`✓ Found menu "${menuItem}" with selector: ${selector}`);
          found = true;
          break;
        }
      } catch (e) {
        // Try next selector
      }
    }
    
    if (!found) {
      console.log(`❌ Could not find menu item: ${menuItem}`);
      // Let's see what navigation elements exist
      const allNavElements = await this.page.locator('nav a, nav button, nav li, header a').allTextContents();
      console.log('Available navigation elements:', allNavElements);
      throw new Error(`Menu item "${menuItem}" not found`);
    }
  }
});