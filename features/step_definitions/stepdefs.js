const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function isPerfectSquare(number) {
  return number > 0 && Math.sqrt(number) % 1 === 0;
}

Given("the number is {int}", function (number) {
  // Given('the number is {float}', function (float) {
  // Write code here that turns the phrase above into concrete actions
  this.number = number;
});

When("I check if the number is a perfect square", function () {
  // Write code here that turns the phrase above into concrete actions
  this.actualAnswer = isPerfectSquare(this.number) ? "Yes" : "No";
});

Then("I should be told {string}", function (expectedAnswer) {
  // Write code here that turns the phrase above into concrete actions
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
