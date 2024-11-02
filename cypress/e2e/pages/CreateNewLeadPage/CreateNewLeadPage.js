var elements = require('./elements')

class CreateNewLeadPage {
    clickonLeadsTab() {
        return cy.get(elements.NEWLEADPAGE.LEAD_TAB).eq(1).should('be.visible').click({ force: true })
    }
    clickonAddLeadButton() {
        return cy.get(elements.NEWLEADPAGE.ADD_LEAD_BUTTON).click()
    }
    clickonCreateLeadButton() {
        return cy.get(elements.NEWLEADPAGE.CREATE_LEAD_BUTTON).click()
    }

}
export default CreateNewLeadPage