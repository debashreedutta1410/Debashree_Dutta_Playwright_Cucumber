/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed partially with the assistance of GitHub Copilot
**  AI coding assistance started: 08/02/2025
**  Developer notes: 
*/ 

const { BasePage } = require('./BasePage');

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryItems = '.inventory_item';
    this.cartBadge = '.shopping_cart_badge';
    this.cartContainer = '.shopping_cart_container';
  }

  async addProductToCart(productName) {
    const productLocator = this.page.locator(this.inventoryItems).filter({
      hasText: productName
    });
    await productLocator.locator('button:has-text("Add to cart")').click();
  }

  getCartBadge() {
    return this.page.locator(this.cartBadge);
  }

  async goToCart() {
    await this.click(this.cartContainer);
  }

  async verifyCartBadgeCount(expectedCount) {
    await this.verifyElementText(this.cartBadge, expectedCount);
  }
}

module.exports = { InventoryPage };
