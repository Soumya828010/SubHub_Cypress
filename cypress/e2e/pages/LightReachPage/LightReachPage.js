var elements = require('./elements')

class LightReachPage {
    clickLightReachTab() {
            cy.get('#mat-tab-label-1-0')
                .scrollIntoView({ offset: { top: 0, left: 0 } }) // Optional offset
                .should('be.visible').click()
        }
    }
export default LightReachPage