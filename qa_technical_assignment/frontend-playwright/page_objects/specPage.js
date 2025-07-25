import { expect } from '@playwright/test';
import testData from '../fixtures/testData.json';
import expectedResults from '../fixtures/expectedResults.json';

class SpecPage {
  // Define locators in the constructor
  initLocators(page) {
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.productCards = page.locator('[data-test="inventory-item"]');
    this.productName = (index) => this.productCards.nth(index).locator('[data-test="inventory-item-name"]');
    this.pdpTitle = page.locator('.inventory_details_name');
    this.pdpDescription = page.locator('.inventory_details_desc');
    this.pdpPrice = page.locator('.inventory_details_price');
    this.addToCartButton = page.locator('button[data-test="add-to-cart"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.totalLabel = page.locator('[data-test="total-label"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.orderSuccessHeader = page.locator('.complete-header');
  }

  async login(page) {
    this.initLocators(page);
    await this.usernameInput.fill(testData.user.username);
    await this.passwordInput.fill(testData.user.password);
    await this.loginButton.click();
    await expect(page).toHaveURL(/inventory\.html/);
  }

  async goToSecondProductDetails(page) {
    this.initLocators(page);
    await this.productName(1).click();
    await expect(page).toHaveURL(/inventory-item\.html/);
  }

  async validatePDP(page) {
    this.initLocators(page);
    await expect(this.pdpTitle).not.toBeEmpty();
    await expect(this.pdpDescription).not.toBeEmpty();
    await expect(this.pdpPrice).toContainText('$');
  }

  async addToCartAndVerify(page) {
    this.initLocators(page);
    await this.addToCartButton.click();
    await expect(this.cartBadge).toHaveText('1');
  }

  async verifyCart(page) {
    this.initLocators(page);
    await this.cartLink.click();
    await expect(page).toHaveURL(/cart\.html/);
    await expect(this.cartItems).toHaveCount(1);
  }

  async fillCheckoutInfo(page) {
    this.initLocators(page);
    await this.checkoutButton.click();
    await expect(page).toHaveURL(/checkout-step-one\.html/);
    await this.firstNameInput.fill(testData.checkoutInfo.firstName);
    await this.lastNameInput.fill(testData.checkoutInfo.lastName);
    await this.postalCodeInput.fill(testData.checkoutInfo.postalCode);
  }

  async completePurchase(page) {
    this.initLocators(page);
    await this.continueButton.click();
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(this.totalLabel).toContainText('$');
  }

  async validateOrderCompletion(page) {
    this.initLocators(page);
    await this.finishButton.click();
    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(this.orderSuccessHeader).toHaveText(expectedResults.checkoutSuccessMessage);
  }
}

export default new SpecPage();
