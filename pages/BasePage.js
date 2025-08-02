/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed fully with the assistance of GitHub Copilot
**  AI coding assistance started: 08/02/2025
**  Developer notes: 
*/ 

const { expect } = require('playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Common navigation methods
  async goto(url) {
    await this.page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 60000 
    });
  }

  // Common element interaction methods
  async click(selector) {
    await this.page.locator(selector).click();
  }

  async fill(selector, text) {
    await this.page.locator(selector).fill(text);
  }

  async getText(selector) {
    return await this.page.locator(selector).textContent();
  }

  // Common verification methods
  async verifyElementText(selector, expectedText) {
    const element = this.page.locator(selector);
    await expect(element).toHaveText(expectedText);
  }
}

module.exports = { BasePage };
