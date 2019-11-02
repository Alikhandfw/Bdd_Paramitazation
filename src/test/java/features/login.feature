Feature: Valid user login

Scenario: valid user login to account



Given User Enter Id and Password

Then User is able to login

And user is on Online Test console



Scenario: Get quote on new car



Given User is no WebUniv

When  Test WebElement Click

Then Test JavaScript Click

And Action Move Click

Then  go back to main page
