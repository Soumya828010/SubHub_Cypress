import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CreateNewCustomerPage from '../../e2e/pages/CreateNewCustomerPage/CreateNewCustomerPage'

const createNewCustomerPage = new CreateNewCustomerPage()

When('i click on Customer tab', () => {
    createNewCustomerPage.clickoncustomertab()
})
When('i click on New Customer button', () => {
    createNewCustomerPage.clicknewcustomerbtn()
})
When('i enter Address {string}', (value) => {
    createNewCustomerPage.TypeInAddressTextbox(value)
})
When('i enter First name {string}', (value) => {
    createNewCustomerPage.TypeInFirstNameTextbox(value)
})
When('i Enter Last name {string}', (value) => {
    createNewCustomerPage.TypeInLastNameTextbox(value)
})
When('i Enter email {string}', (value) => {
    createNewCustomerPage.TypeInEmailTextbox(value)
})
When('i Enter Phone Number {string}', (value) => {
    createNewCustomerPage.TypeInPhoneNumberTextbox(value)
})
When('i Select Job Type as solar', () => {
    createNewCustomerPage.TypeInJobTypeSolar()
})
When('i Select Job Type as Roof', () => {
    createNewCustomerPage.TypeInJobTypeRoof()
})
When('i Select Job Type as Hvac', () => {
    createNewCustomerPage.TypeInJobTypeHvac()
})
When('i Select Job Type Fence', () => {
    createNewCustomerPage.TypeInJobTypeFence()
})
When('i Select Job Type Battery', () => {
    createNewCustomerPage.TypeInJobTypeBattery()
})
When('i Select Job Type Roof with Solar', () => {
    createNewCustomerPage.TypeInJobTypeRoofwithSolar()
})
When('i click on Create Customer button', () =>
    createNewCustomerPage.ClickCustomerButton()
)
