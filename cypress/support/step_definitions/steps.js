import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../e2e/pages/loginPage/LoginPage'
//import SignUpPage from '../../e2e/pages/signUpPage/SignUpPage'
//import HomePage from '../../e2e/pages/homePage/HomePage'

const loginPage = new LoginPage()
//const signUpPage = new SignUpPage()
//const homePage = new HomePage()

Given('I am on the login page', () => {
    cy.visit('https://staging.subcontractorhub.com/auth/login')
    //loginPage.verifyOnLoginPage()
})

When('I click on sigh up link', () => {
    loginPage.clickOnSignUpLink()
})

Then('I should be on the sign up page', () => {
    loginPage.verifyOnSignUpPage()
})

When('I type in my first name {string}', (value) => {
    loginPage.TypeInFirstNameTextbox(value)
})

When('I type in my last name {string}', (value) => {
    loginPage.TypeInLastNameTextbox(value)
})

When('I type in my username {string}', (value) => {
    loginPage.TypeInUsernameTextbox(value)
})

When('I type in my password {string}', (value) => {
    loginPage.TypeInPasswordTextbox(value)
})

When('I type in my password again {string}', (value) => {
    loginPage.TypeInConfirmPasswordTextbox(value)
})

When('I click on the sign up button', () => {
    loginPage.clickOnSignUpButton()
})

Then('I should be on the login page', () => {
    loginPage.verifyOnLoginPage()
})

Then('I should be on the home page', () => {
    //homePage.verifyOnHomePage()
})

Then('I should see username - {string} on homepage', (value) => {
    //homePage.verifyUsernameOnHomePage(value)
})