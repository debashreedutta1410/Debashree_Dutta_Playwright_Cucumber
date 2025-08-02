<<<<<<< HEAD
# Debashree_Dutta_Playwright_Cucumber
 This project showcases a robust end-to-end UI automation framework built using Playwright with cucumber, following the Page Object Model (POM) design pattern.
=======
<!--
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed partially with the assistance of GitHub Copilot
**  AI coding assistance started: 08/02/2025
**  Developer notes: 
--> 

# SauceDemo BDD Automation

Automated tests for SauceDemo e-commerce website using Cucumber BDD and Google Chrome.

## Project Structure

```
saucedemo-bdd-automation/
├── features/
│   └── checkout.feature        # Test scenarios in Gherkin format
├── step-definitions/
│   └── checkout-steps.js       # Step implementations
├── pages/                      # Page Object Model
│   ├── BasePage.js            # Base functionality
│   ├── loginPage.js           # Login page
│   ├── InventoryPage.js       # Products page
│   ├── cartPage.js            # Shopping cart
│   └── checkoutPage.js        # Checkout process
└── package.json
```

## Installation

```bash
npm install
```

## Running Tests

```bash
# All tests
npm test

# Smoke tests only
npm run test:smoke

# Critical tests only  
npm run test:critical

# Regression tests only
npm run test:regression
```

## Test Scenarios

**Smoke Test**: Standard user complete checkout
- Login → Add product → Verify cart → Checkout → Complete order

**Regression Test**: Multiple products checkout
- Login → Add multiple products → Verify cart → Checkout → Complete order

## Browser Configuration

- **Browser**: Google Chrome (system installation)
- **Mode**: Non-headless (visible browser)
- **Corporate Network**: Certificate bypassing enabled

## Test Data

- **Site**: https://www.saucedemo.com/
- **User**: standard_user / secret_sauce
- **Products**: Sauce Labs Backpack, Sauce Labs Bike Light
>>>>>>> 36afb9a (Initial commit)
