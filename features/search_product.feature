Feature: Search and Purchase Product on Allegro


@search
  Scenario: Search for a Product

    Given User is logged in to the Allegro platform
    When User enters "smartphone" in the search field
    And User clicks the "Search" button
    Then Search results related to "smartphone" are displayed

@select
  Scenario: Select a Product for Purchase

    Given User is browsing search results
    When User selects a specific product
    And User navigates to the product page
    Then Product details page is displayed

@add-to-cart
  Scenario: Add Product to Cart

    Given User is on the product details page
    When User clicks the "Add to Cart" button
    Then Product is added to the cart

 @purchase-validation
  Scenario: Purchase Validation

    Given User is in the shopping cart
    When User proceeds to the checkout process
    And User enters delivery and payment details
    And User confirms the order
    Then Purchase confirmation is displayed

@calculate-cost
Scenario: Calculate total cost

Given the following products are added to the shopping cart:

| Product               | Price   |
| Smartfone N6000       | 1073    |
| SMARTFONE QI AUTO     | 150     |
| Case smartfone Huawei | 90      |

When I calculate the total cost
Then the total cost should be 1313
