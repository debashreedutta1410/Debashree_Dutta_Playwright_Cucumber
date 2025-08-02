Feature: E-commerce Checkout Flow
  As a customer
  I want to purchase products from the SauceDemo store
  So that I can complete my shopping experience

  Background:
    Given I am on the SauceDemo login page

  @smoke @checkout @critical
  Scenario: Standard user completes checkout successfully
    Given I login with username "standard_user" and password "secret_sauce"
    When I add "Sauce Labs Backpack" to cart
    Then I should see cart badge showing "1" item
    When I navigate to cart
    Then I should see "Sauce Labs Backpack" in my cart
    When I proceed to checkout
    And I fill checkout information with firstName "John", lastName "Doe", and postalCode "12345"
    Then I should see total amount as "$32.39"
    When I finish the order
    Then I should see order completion confirmation

  @regression @checkout
  Scenario: Multiple products checkout flow
    Given I login with username "standard_user" and password "secret_sauce"
    When I add the following products to cart:
      | productName              |
      | Sauce Labs Backpack      |
      | Sauce Labs Bike Light    |
    Then I should see cart badge showing "2" items
    When I navigate to cart
    Then I should see the following products in my cart:
      | productName              |
      | Sauce Labs Backpack      |
      | Sauce Labs Bike Light    |
    When I proceed to checkout
    And I fill checkout information with firstName "Jane", lastName "Smith", and postalCode "54321"
    And I finish the order
    Then I should see order completion confirmation
