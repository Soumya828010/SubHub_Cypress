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
                                    .click().wait(10000);  // Click the button inside the iframe
                            });
    }
    aiDesignNextButton() {
        cy.get('iframe#iframeId')
            .its('0.contentDocument').should('exist')  // Get the iframe's document
            .then((iframeDoc) => {
                // Use cy.wrap() to interact with the iframe's content
                cy.wrap(iframeDoc.body)
                    .find('button.sc-jIRcFI.JuZhs.save-btn')// Use the appropriate button class or selector
                    .scrollIntoView({ offset: { top: 0, left: 0 } })
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
            .should('be.visible').click().wait(30000)
    }
    financeSOLRIE() {
        cy.get('#mat-tab-label-1-0')
            .scrollIntoView() // Optional offset
            .should('be.visible').click().wait(50000)
    }
    createAccountButton() {
        return cy.get(elements.TOOLDESIGN.CREATE_ACCOUNT_BUTTON).should('be.visible').wait(30000).click({ force: true })
    }
    selectEscalatorRate() {
        return cy.get(elements.TOOLDESIGN.SELECT_ESCALATOR_RATE).eq(15).scrollIntoView({ offset: { top: 0, left: 0 } }) // Optional offset
            .should('be.visible').click().wait(10000)
        //.type('{downArrow}').type('{enter}')
    }
    selectRate() {
        return cy.get(elements.TOOLDESIGN.SELECT_RATE_DROPDOWN).eq(3).should('be.visible').wait(30000).click({ force: true })
    }
    selectPricing() {
        return cy.get(elements.TOOLDESIGN.SELECT_PRICING_DROPDOWN).eq(1).should('be.visible').wait(10000).click({ force: true })
    }
    pricingValueFromDropdown() {
        return cy.get(elements.TOOLDESIGN.SELECT_PRICING_VALUE).eq(4).should('be.visible').wait(10000).click({ force: true })
    }
    createQuoteButton() {
        return cy.get(elements.TOOLDESIGN.CREATE_QUOTE_BUTTON).eq(166).should('be.visible').wait(10000).click({ force: true }).wait(30000)
    }
    utilityDropDown() {
        return cy.get(elements.TOOLDESIGN.UTILITY_DROPDOWN1).should('be.visible').eq(2).wait(10000).click({ force: true })
    }
    utilityDropDownValue() {
        return cy.get(elements.TOOLDESIGN.UTILITY_DROPDOWN1_VALUE).eq(2).should('be.visible').click({ force: true }).wait(30000)
    }
    selectRateDropdown() {
        return cy.get(elements.TOOLDESIGN.SELECT_RATE_DROPDOWN1).eq(1).scrollIntoView().should('be.visible').wait(10000).click({ force: true })
    }
    createAccountButton1() {
        return cy.get(elements.TOOLDESIGN.CREATE_ACCOUNT_BUTTON1).eq(1).scrollIntoView().should('be.visible').click({ force: true }).wait(30000)
    }
    selectRateDropdownFinance() {
        return cy.get(elements.TOOLDESIGN.SELECT_RATE_DROPDOWN2).eq(4).scrollIntoView().should('be.visible').wait(10000).click({ force: true })
    }
    selectRateDropdownValueFinance() {
        return cy.get(elements.TOOLDESIGN.SELECT_VALUE_RATE_DROPDOWN).eq(5).should('be.visible').wait(10000).click({ force: true })
    }
    clickCreateQuoteLightReach() {
        return cy.get(elements.TOOLDESIGN.CLICK_CREATE_QUOTE_LIGHTREACH).eq(6).scrollIntoView().should('be.visible').wait(10000).click({ force: true }).wait(30000)
    }
    clickOnFinalizeButton() {
        return cy.get(elements.TOOLDESIGN.CLICK_FINALIZE_BUTTON).eq(0).scrollIntoView().should('be.visible').wait(10000).click({ force: true }).wait(30000)
    }
    clickOnQualifyButton() {
        return cy.get(elements.TOOLDESIGN.CLICK_QUALIFY_BUTTON).eq(1).scrollIntoView().should('be.visible').wait(10000).click({ force: true }).wait(30000)
    }
    TypeDOBTextbox(value) {
        return cy.get(elements.TOOLDESIGN.TYPE_DOB_TEXTBOX).type(value)
    }
    TypeSNNTextbox(value) {
        return cy.get(elements.TOOLDESIGN.TYPE_SNN_TEXTBOX).eq(7).type(value)
    }
    TypeJobTitleTextbox(value) {
        return cy.get(elements.TOOLDESIGN.TYPE_JOB_TITLE_TEXTBOX).eq(8).type(value)
    }
    TypeJobTenureMonthsTextbox(value) {
        return cy.get(elements.TOOLDESIGN.TYPE_JOB_TENURE_MONTHS_TEXTBOX).eq(9).type(value)
    }
    TypeEmployerNameTextbox(value) {
        return cy.get(elements.TOOLDESIGN.TYPE_EMPLOYER_NAME_TEXTBOX).eq(6).type(value)
    }
    clickOnEmpStatusDropdown() {
        return cy.get(elements.TOOLDESIGN.CLICK_EMP_STATUS_DROPDOWN).eq(1).should('be.visible').wait(10000).click({ force: true }).wait(10000)
    }
    selectValueFromDropDown() {
        return cy.get(elements.TOOLDESIGN.SELECT_VALUE_DROPDOWN).eq(0).should('be.visible').wait(10000).click({ force: true }).wait(10000)
    }
    selectFirstRadioButton() {
        return cy.get(elements.TOOLDESIGN.SELECT_FIRST_RADIO_BUTTON).eq(35).scrollIntoView().should('be.visible').wait(10000).click({ force: true }).wait(10000)
    }
    selectSecondRadioButton() {
        return cy.get(elements.TOOLDESIGN.SELECT_SECOND_RADIO_BUTTON).eq(36).scrollIntoView().should('be.visible').wait(10000).click({ force: true }).wait(10000)
    }
    clickSubmitButtonForQualify() {
        return cy.get(elements.TOOLDESIGN.CLICK_SUBMIT_BUTTON_FOR_QUALIFY).eq(66).scrollIntoView().should('be.visible').wait(10000).click({ force: true }).wait(10000)
    }
    clickOnOkForPopUp() {
        return cy.get(elements.TOOLDESIGN.CLICK_OK_FOR_POPUP).eq(65).scrollIntoView().should('be.visible').wait(10000).click({ force: true }).wait(10000)
    }
}
export default ToolDesignForSolarPage