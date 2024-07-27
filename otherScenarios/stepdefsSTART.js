const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');



function isItFriday(today) {

if (today === "Friday") {

return "Today is Friday.";

} else {

return "Nope";

}

}

Given('today is Sunday', function () {

this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {

this.actualAnswer = isItFriday(this.today);

});

Then('I should be told {string}', function (expectedAnswer) {

assert.strictEqual(this.actualAnswer, expectedAnswer);

});

Given('today is Friday', function () {

this.today = 'Friday';
});

Then('I can get some rest', function () {
console.log('I will watch a movie');
});

//Dodaję następujący kod do pliku
//Background:
//Given today is a first summer month

Given('today is a first summer month', function () {
console.log('Yes it is first summer month');
});