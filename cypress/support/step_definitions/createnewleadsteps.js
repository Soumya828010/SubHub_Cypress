import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CreateNewLeadPage from '../../e2e/pages/CreateNewLeadPage/CreateNewLeadPage'

const createNewLeadPage = new CreateNewLeadPage()

When('I click on Leads tab', () => {
    createNewLeadPage.clickonLeadsTab()
})
When('I Click on Add Lead button', () => {
    createNewLeadPage.clickonAddLeadButton()
})
When('i click on Create Lead button', () => {
    createNewLeadPage.clickonCreateLeadButton()
})