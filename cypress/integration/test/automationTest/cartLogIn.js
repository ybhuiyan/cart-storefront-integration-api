// const { create } = require("cypress/types/lodash")

// Feature: Login to cart.com

// Scenario: User should be able to login to cart.com with valid user name and password. 
// Given I go to cart.com
// When I enter a valid user name
// And a valid password
// And I click on the sign in Button
// Then I see a a welcom message "Welcome to cart.com"

// Scenario: Create new account
// Given I go to cart.com
// When I click on sigin Button
// And I click on the create account Option
// And I enter first name
// And I enter last name
// And I enter email address
// And I enter password
// And I enter phone Number
// And I click on the "Create Account" button 
// Then I see "success"


// Scenario: Validate error message for creating a account at cart.com
// Given I go to cart.com
// When I click on sigin Button
// And I click on the create account Option
// And I click on the "create account" button from the create account from
// Then I see error message for:
// |Firt Name|
// |Last Name|
// |Email|
// |Password|
// |Phone nmber|