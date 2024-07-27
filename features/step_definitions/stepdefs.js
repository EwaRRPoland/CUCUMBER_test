// features/step_definitions/stepdefs.js


//to extend the code, not required at the moment


const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


Given('User is logged in to the Allegro platform', function () {
  // Logic to log in the user
});

When('User enters {string} in the search field', function (searchTerm) {
  // Logic to enter the search term
});

When('User clicks the "Search" button', function () {
  // Logic to perform the search
});

Then('Search results related to {string} are displayed', function (searchTerm) {
  // Logic to verify search results
});

Given('User is browsing search results', function () {
  // Logic to navigate through search results
});

When('User selects a specific product', function () {
  // Logic to select a product
});

When('User navigates to the product page', function () {
  // Logic to navigate to the product details page
});

Then('Product details page is displayed', function () {
  // Logic to verify product details page
});

Given('User is on the product details page', function () {
  // Logic to be on the product details page
});

When('User clicks the "Add to Cart" button', function () {
  // Logic to add product to cart
});

Then('Product is added to the cart', function () {
  // Logic to verify product added to cart
});

Given('User is in the shopping cart', function () {
  // Logic to be in the shopping cart
});

When('User proceeds to the checkout process', function () {
  // Logic to proceed to checkout
});

When('User enters delivery and payment details', function () {
  // Logic to enter delivery and payment details
});

When('User confirms the order', function () {
  // Logic to confirm the order
});

Then('Purchase confirmation is displayed', function () {
  // Logic to verify purchase confirmation
});

// When('I calculate the total cost', function () {
//   // Logic to calculate total cost
// });

// Then('the total cost should be {int}', function (expectedTotalCost) {
//   // Logic to verify total cost

// let shoppingCart = [];
// Given('the following products are added to the shopping cart:', function (dataTable) {

// shoppingCart = dataTable.hashes();
// });

When('I calculate the total cost', function () {

let totalCost = 0;

for (let i = 0; i < shoppingCart.length; i++) {

const product = shoppingCart[i];

totalCost += parseInt(product.Price);

}

this.totalCost = totalCost;

});

Then('the total cost should be {int}', function (expectedTotalCost) {

const actualTotalCost = this.totalCost;

assert.strictEqual(actualTotalCost, expectedTotalCost);

});


//   assert.equal(/* actual total cost */, expectedTotalCost);
// });
