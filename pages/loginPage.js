/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed partially with the assistance of GitHub Copilot
**  AI coding assistance started: 08/02/2025
**  Developer notes: 
*/ 

const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://www.saucedemo.com/';
    this.usernameField = '[data-test="username"]';
    this.passwordField = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
    this.errorMessage = '[data-test="error"]';
  }

  async goto() {
    await super.goto(this.url);
  }

  async login(username, password) {
    await this.fill(this.usernameField, username);
    await this.fill(this.passwordField, password);
    await this.click(this.loginButton);
  }

  getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }

  async verifyLoginError(expectedError) {
    await this.verifyElementText(this.errorMessage, expectedError);
  }
}

module.exports = { LoginPage };
