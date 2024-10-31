var elements = require('./elements')

class CreateNewCustomerPage {
    TypeInUsernameTextbox(value) {
        return cy.get(elements.NEWCUSTOMERPAGE.USERNAME_TEXT).type(value)
    }

    TypeInPasswordTextbox(value) {
        return cy.get(elements.NEWCUSTOMERPAGE.PASSWORD_TEXT).type(value)
    }

    TypeInConfirmPasswordTextbox(value) {
        return cy.get(elements.NEWCUSTOMERPAGE.CONFIRM_PASSWORD_TEXT).type(value)
    }

    clickOnSignUpButton() {
        return cy.get(elements.NEWCUSTOMERPAGE.SIGN_IN_BUTTON).click()
    }
    clickoncustomertab() {    
        return cy.get(elements.NEWCUSTOMERPAGE.CUSTOMER_TAB).eq(2).should('be.visible').click()
        cy.wait(20000)
    }
    clicknewcustomerbtn() {
        cy.wait(10000);
        return cy.get(elements.NEWCUSTOMERPAGE.NEW_CUSTOMER_BUTTON).should('exist').and('be.visible').click();
    }
    TypeInAddressTextbox(value) {
        return cy.get(elements.NEWCUSTOMERPAGE.ADDRESS_TEXT).type(value).focus().wait(5000).type('{downArrow}').type('{enter}')
        cy.get('body').type('{tab}');
    }
    TypeInFirstNameTextbox(value) {
        return cy.get(elements.NEWCUSTOMERPAGE.FIRSTNAME_TEXT).type(value)
    }
    TypeInLastNameTextbox(value) {
        return cy.get(elements.NEWCUSTOMERPAGE.LASTNAME_TEXT).type(value)
    }
    TypeInEmailTextbox(value) {
        return cy.get(elements.NEWCUSTOMERPAGE.EMAIL_TEXT).type(value)
    }
    TypeInPhoneNumberTextbox(value) {
        return cy.get(elements.NEWCUSTOMERPAGE.PHONE_NUMBER_TEXT).type(value)
    }
    TypeInJobTypeSolar() {
        return cy.get(elements.NEWCUSTOMERPAGE.JOB_TYPE_DROPDOWN).click().focus().wait(5000).type('{enter}')
        
    }
    TypeInJobTypeRoof() {
        return cy.get(elements.NEWCUSTOMERPAGE.JOB_TYPE_DROPDOWN).click().focus().wait(5000).type('{downArrow}').type('{enter}')
    }
    TypeInJobTypeHvac() {
        return cy.get(elements.NEWCUSTOMERPAGE.JOB_TYPE_DROPDOWN).click().focus().wait(5000).type('{downArrow}{downArrow}').type('{enter}')
    }
    TypeInJobTypeFence() {
        return cy.get(elements.NEWCUSTOMERPAGE.JOB_TYPE_DROPDOWN).click().focus().wait(5000).type('{downArrow}{downArrow}{downArrow}').type('{enter}')
    }
    TypeInJobTypeBattery() {
        return cy.get(elements.NEWCUSTOMERPAGE.JOB_TYPE_DROPDOWN).click().focus().wait(5000).type('{downArrow}{downArrow}{downArrow}{downArrow}').type('{enter}')
    }
    TypeInJobTypeRoofwithSolar() {
        return cy.get(elements.NEWCUSTOMERPAGE.JOB_TYPE_DROPDOWN).click().focus().wait(5000).type('{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}').type('{enter}')
    }


    ClickCustomerButton() {
        return cy.get(elements.NEWCUSTOMERPAGE.CREATE_CUSTOMER).click().wait(10000)
    }
} 

export default CreateNewCustomerPage