var elements = require('./elements')

class CreateNewProposalPage {
    clickonsolartab() {
        return cy.wait(5000)
        //return cy.get(elements.NEWPROPOSALPAGE.SOLAR_TAB).click()
    }

    clickonexistingcustomer() {
        return cy.get(elements.NEWPROPOSALPAGE.EXISTING_CUSTOMER).eq(0).should('be.visible').click()
    }
    clickonnewproposal() {
        return cy.get(elements.NEWPROPOSALPAGE.NEW_PROPOSAL_BUTTON).eq(0).wait(10000).should('be.visible').click()
    }
    clickjobtypedropdown() {
        return cy.get(elements.NEWPROPOSALPAGE.JOB_TYPE_DROPDOWN).click()
        return cy.get(elements.NEWPROPOSALPAGE.SOLAR_DROPDOWN).click()
    }

    clickjobtypesolar() {
        return cy.get(elements.NEWPROPOSALPAGE.SOLAR_DROPDOWN).eq(0).click({ force: true });
        //const dropdownSelector = elements.NEWPROPOSALPAGE.JOB_TYPE_DROPDOWN; // Your dropdown selector
        // Replace with your iframe selector
        //const iframeSelector = 'cb-master-frame'; // Adjust this selector to target your specific iframe
        //const dropdownSelector = elements.NEWPROPOSALPAGE.JOB_TYPE_DROPDOWN; // Your dropdown selector
        //const optionToSelect = 'Solar'; // Replace with the value you want to select

        // Access the iframe and interact with the dropdown
        //cy.get(iframeSelector).then($iframe => {
            //const body = $iframe.contents().find('body'); // Get the body of the iframe

            // Now, you can access the dropdown within the iframe
            //cy.wrap(body)
                //.find(dropdownSelector)
              //  .click(); // Click to open the dropdown

            // Select the desired option
            //cy.wrap(body)
                //.find('mat-option') // Adjust this selector to find the correct option
              //  .contains(optionToSelect)
             //   .click(); // Click the option


    }
    clickjobtyperoof() {
        return cy.get(elements.NEWPROPOSALPAGE.SOLAR_DROPDOWN).eq(1).click({ force: true });
    }
    clickjobtypehvac() {
        return cy.get(elements.NEWPROPOSALPAGE.SOLAR_DROPDOWN).eq(2).click({ force: true });
    }
    clickjobtypefence() {
        return cy.get(elements.NEWPROPOSALPAGE.SOLAR_DROPDOWN).eq(3).click({ force: true });
    }
    clickjobtypebattery() {
        return cy.get(elements.NEWPROPOSALPAGE.SOLAR_DROPDOWN).eq(4).click({ force: true });
    }
    clickjobtyperoofwithsolar() {
        return cy.get(elements.NEWPROPOSALPAGE.SOLAR_DROPDOWN).eq(5).click({ force: true });
    }

    clickcreateproposalbutton() {
        return cy.get(elements.NEWPROPOSALPAGE.CREATE_PROPOSAL_BUTTON).click().wait(10000)
    }
}
export default CreateNewProposalPage