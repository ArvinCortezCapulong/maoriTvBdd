// import { setWorldConstructor, World } from '@cucumber/cucumber';
// import { chromium, Browser, Page } from 'playwright';

// export class CustomWorld extends World {
//   browser!: Browser;
//   page!: Page;

//   async openBrowser() {
//     this.browser = await chromium.launch({ headless: true });
//     this.page = await this.browser.newPage();
//   }

//   async closeBrowser() {
//     await this.browser.close();
//   }
// }

// setWorldConstructor(CustomWorld);

import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';  // Changed this line

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  async openBrowser() {
    this.browser = await chromium.launch({ headless: false, slowMo: 1000});
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);


// npm run test:bdd:headed

// # Windows
// set HEADED=1 && npx cucumber-js executing test

// # Or use your package.json script
// npm run test:bdd:headed executing test

// npx cucumber-js --dry-run  executing test