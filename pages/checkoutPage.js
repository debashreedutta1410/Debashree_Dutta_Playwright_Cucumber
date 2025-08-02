/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed fully with the assistance of GitHub Copilot
**  AI coding assistance started: 08/02/2025
**  Developer notes: 
*/ 

const { BasePage } = require('./BasePage');
const { expect } = require('playwright/test');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameField = '[data-test="firstName"]';
    this.lastNameField = '[data-test="lastName"]';
    this.zipCodeField = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.completeHeader = '.complete-header';
    this.totalLabel = '.summary_total_label';
  }

  async fillCheckoutInfo(firstName, lastName, zip) {
    await this.fill(this.firstNameField, firstName);
    await this.fill(this.lastNameField, lastName);
    await this.fill(this.zipCodeField, zip);
    await this.click(this.continueButton);
  }

  async verifyTotalAmount(expectedAmount) {
    const totalText = await this.getText(this.totalLabel);
    const amount = totalText?.trim().replace('Total: ', '');
    expect(amount).toBe(expectedAmount);
  }

  async finishOrder() {
    await this.click(this.finishButton);
  }

  async verifyOrderComplete() {
    await this.verifyElementText(this.completeHeader, 'Thank you for your order!');
  }
}

module.exports = { CheckoutPage };
