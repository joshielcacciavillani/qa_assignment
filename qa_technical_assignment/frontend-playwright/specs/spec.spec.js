import { test, expect } from '@playwright/test';
import specPage from '../page_objects/specPage';

test.describe('Guest Checkout Flow', () => {

   test.beforeEach(async ({ page }) => {
    // Visit the page before each test
    await page.goto('https://www.saucedemo.com/');
  });
  
  test('Complete purchase of second item', async ({ page }) => {
    await specPage.login(page);
    await specPage.goToSecondProductDetails(page);
    await specPage.validatePDP(page);
    await specPage.addToCartAndVerify(page);
    await specPage.verifyCart(page);
    await specPage.fillCheckoutInfo(page);
    await specPage.completePurchase(page);
    await specPage.validateOrderCompletion(page);
  });

});

