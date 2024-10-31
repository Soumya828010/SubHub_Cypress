var elements = require('./elements')

class LoginPage {
    TypeInUsernameTextbox(value) {
        return cy.get(elements.LOGINPAGE.USERNAME_TEXT).type(value)
    }

    TypeInPasswordTextbox(value) {
        return cy.get(elements.LOGINPAGE.PASSWORD_TEXT).type(value)
    }

    TypeInConfirmPasswordTextbox(value) {
        return cy.get(elements.SIGNUPPAGE.CONFIRM_PASSWORD_TEXT).type(value)
    }

    clickOnSignUpButton() {
        return cy.get(elements.LOGINPAGE.SIGN_IN_BUTTON).click()
    }
}

export default LoginPage