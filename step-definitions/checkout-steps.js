/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed fully with the assistance of GitHub Copilot
**  AI coding assistance started: 08/02/2025
**  Developer notes: 
*/ 

const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const { chromium } = require('playwright');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

setDefaultTimeout(30 * 1000);

let browser, context, page;
let loginPage, inventoryPage, cartPage, checkoutPage;

Before(async function () {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  
  browser = await chromium.launch({ 
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--disable-web-security'
    ]
  });
  
  context = await browser.newContext({
    ignoreHTTPSErrors: true
  });
  page = await context.newPage();
  
  // Initialize page objects
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
  
  // Store in world for access in steps
  this.page = page;
  this.loginPage = loginPage;
  this.inventoryPage = inventoryPage;
  this.cartPage = cartPage;
  this.checkoutPage = checkoutPage;
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

// Background step
Given('I am on the SauceDemo login page', async function () {
  await this.loginPage.goto();
});

// Login steps
Given('I login with username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

// Product management steps
When('I add {string} to cart', async function (productName) {
  await this.inventoryPage.addProductToCart(productName);
});

When('I add the following products to cart:', async function (dataTable) {
  const products = dataTable.hashes();
  for (const product of products) {
    await this.inventoryPage.addProductToCart(product.productName);
  }
});

// Cart verification steps
Then('I should see cart badge showing {string} item', async function (count) {
  const cartBadge = this.inventoryPage.getCartBadge();
  await expect(cartBadge).toHaveText(count);
});

Then('I should see cart badge showing {string} items', async function (count) {
  const cartBadge = this.inventoryPage.getCartBadge();
  await expect(cartBadge).toHaveText(count);
});

// Navigation steps
When('I navigate to cart', async function () {
  await this.inventoryPage.goToCart();
});

// Cart content verification
Then('I should see {string} in my cart', async function (productName) {
  await this.cartPage.verifyProductInCart(productName);
});

Then('I should see the following products in my cart:', async function (dataTable) {
  const products = dataTable.hashes();
  for (const product of products) {
    await this.cartPage.verifyProductInCart(product.productName);
  }
});

// Checkout steps
When('I proceed to checkout', async function () {
  await this.cartPage.proceedToCheckout();
});

When('I fill checkout information with firstName {string}, lastName {string}, and postalCode {string}', 
async function (firstName, lastName, postalCode) {
  await this.checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
});

Then('I should see total amount as {string}', async function (totalAmount) {
  await this.checkoutPage.verifyTotalAmount(totalAmount);
});

When('I finish the order', async function () {
  await this.checkoutPage.finishOrder();
});

Then('I should see order completion confirmation', async function () {
  await this.checkoutPage.verifyOrderComplete();
});
