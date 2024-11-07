var elements = require('./elements')

class ToolDesignForSolarPage {
    clickOnAIDesignButton() {
        return cy.get(elements.TOOLDESIGN.AI_DESIGN_BUTTON).eq(17).should('be.visible').click({ force: true })
    }
    clickOnYesButton() {
        return cy.get(elements.TOOLDESIGN.Popup_Yes_Button).eq(4).should('be.visible').click({ force: true })
    }
    clickOnUtilityDropdown() {
        return cy.get(elements.TOOLDESIGN.UTILITY_DROPDOWN).click()
    }
    typeInUtilityDropDown(value) {
        return cy.get(elements.TOOLDESIGN.UTILITY_DROPDOWN).type(value)
        //.focus().wait(5000).type('{downArrow}').type('{enter}')
        //cy.get('body').type('{tab}');
    }
    SelectTheFirstOptionDropdown() {
        return cy.get(elements.TOOLDESIGN.UTILITY_FIRSTOPTION).eq(0).click({ force: true }).wait(5000)
    }
    ClickOnStartDesign() {
        return cy.get(elements.TOOLDESIGN.START_DESIGN_BUTTON).eq(0).should('be.visible').click({ force: true }).wait(10000)
    }
    RunAIDesignButton() {

                        cy.get('iframe#iframeId')
                            .its('0.contentDocument').should('exist')  // Get the iframe's document
                            .then((iframeDoc) => {
                                // Use cy.wrap() to interact with the iframe's content
                                cy.wrap(iframeDoc.body)
                                    .find('button.sc-jIRcFI.JuZhs')  // Use the appropriate button class or selector
                                    .should('be.visible')  // Ensure the button is visible inside the iframe
                                    .click().wait(5000);  // Click the button inside the iframe
                            });
    }
    aiDesignNextButton() {
        cy.get('iframe#iframeId')
            .its('0.contentDocument').should('exist')  // Get the iframe's document
            .then((iframeDoc) => {
                // Use cy.wrap() to interact with the iframe's content
                cy.wrap(iframeDoc.body)
                    .find('button.sc-jIRcFI.JuZhs.save-btn')  // Use the appropriate button class or selector
                    .should('be.visible')  // Ensure the button is visible inside the iframe
                    .click().wait(5000);
            })
        //return cy.get(elements.TOOLDESIGN.RUN_AI_DESIGN_NEXT_BUTTON).should('be.visible').click({ force: true })
    }
    batteryToggleButton() {
        return cy.get(elements.TOOLDESIGN.Toggle_Button).should('be.visible').click({ force: true })
    }
    batteryStorage() {
        //return cy.get(elements.TOOLDESIGN.Battery_Storage).should('be.visible').click({ force: true })

        cy.get('[data-slick-index="0"]')
            .scrollIntoView({ offset: { top: 0, left: 0 } }) // Optional offset
            .should('be.visible').click()
    }
    financeSOLRIE() {
        cy.get('#mat-tab-label-1-0')
            .scrollIntoView({ offset: { top: 0, left: 0 } }) // Optional offset
            .should('be.visible').click()
    }
    createAccountButton() {
        return cy.get(elements.TOOLDESIGN.CREATE_ACCOUNT_BUTTON).should('be.visible').click({ force: true })
    }

}
export default ToolDesignForSolarPage