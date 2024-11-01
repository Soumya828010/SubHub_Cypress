import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CreateNewProposalPage from '../../e2e/pages/CreateNewProposalPage/CreateNewProposalPage'
import 'cypress-iframe'

const createNewProposalPage = new CreateNewProposalPage()

When('I click on Solar tab', () => {
    createNewProposalPage.clickonsolartab()
})
When('I Click on an Existing Customer', () => {
    createNewProposalPage.clickonexistingcustomer()
})
When('I click on New Proposal button', () => {
    createNewProposalPage.clickonnewproposal()
})
When('I Select Job Type dropdown', () => {
    createNewProposalPage.clickjobtypedropdown()
})
When('I Select Job Type as solar', () => {
    createNewProposalPage.clickjobtypesolar()
})
When('I Select Job Type as Roof', () => {
    createNewProposalPage.clickjobtyperoof()
})
When('I Select Job Type as Hvac', () => {
    createNewProposalPage.clickjobtypehvac()
})
When('I Select Job Type as Fence', () => {
    createNewProposalPage.clickjobtypefence()
})
When('I Select Job Type as Battery', () => {
    createNewProposalPage.clickjobtypebattery()
})
When('I Select Job Type as Roof With Solar', () => {
    createNewProposalPage.clickjobtyperoofwithsolar()
})

When('I click on Create Proposal button', () => {
    createNewProposalPage.clickcreateproposalbutton()
})