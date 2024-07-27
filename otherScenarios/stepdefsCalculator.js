const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


// features/step_definitions/stepdefs.js


Given('user enters {int} into the calculator', function (number) {
  // Logic to enter the number into the calculator
});

When('user presses "add"', function () {
  // Logic to press the "add" button
});

Then('the result should equal {int} on the screen', function (expectedResult) {
  // Logic to verify the result on the screen
});
