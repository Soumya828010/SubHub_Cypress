import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import ToolDesignForSolarPage from '../../e2e/pages/ToolDesignPage/ToolDesignForSolarPage'

const toolDesignForSolarPage = new ToolDesignForSolarPage()

When('I Click on AI Design button', () => {
    toolDesignForSolarPage.clickOnAIDesignButton()
})
When('I click on Yes button from the pop up', () => {
    toolDesignForSolarPage.clickOnYesButton()
})
When('I click on Utility Dropdown', () => {
    toolDesignForSolarPage.clickOnUtilityDropdown()
})
When('I Enter the value in the utility {string}', (value) => {
    toolDesignForSolarPage.typeInUtilityDropDown(value)
})
When('I select the first option from the dropdown', () => {
    toolDesignForSolarPage.SelectTheFirstOptionDropdown()
})
When('I Click on Start Design Button', () => {
    toolDesignForSolarPage.ClickOnStartDesign()
})
When('I Click on Run AI Design Button', () => {
    toolDesignForSolarPage.RunAIDesignButton()
})
When('I Click on Next button', () => {
    toolDesignForSolarPage.aiDesignNextButton()
})
When('I Click on the Battery option', () => {
    toolDesignForSolarPage.batteryToggleButton()
})
When('I Select the Battery from Battery Storage', () => {
    toolDesignForSolarPage.batteryStorage()
})
When('I Select the finance as SOLRITE', () => {
    toolDesignForSolarPage.financeSOLRIE()
})
When('I Click on the Create Account Button for the Solrite', () => {
    toolDesignForSolarPage.createAccountButton()
})
When('I Select a rate for Escalator Rate', () => {
    toolDesignForSolarPage.selectEscalatorRate()
})
When('I Select a rate from the dropdown', () => {
    toolDesignForSolarPage.selectRate()
})
When('I Select a Pricing from the Pricing dropdown', () => {
    toolDesignForSolarPage.selectPricing()
})
When('I Select a pricing a value from the dropdown', () => {
    toolDesignForSolarPage.pricingValueFromDropdown()
})
When('I Click on Create Quote button to create a Quote', () => {
    toolDesignForSolarPage.createQuoteButton()
})
When('I Click on the Utility from the finance section', () => {
    toolDesignForSolarPage.utilityDropDown()
})
When('I Select a Utility from the dropdown', () => {
    toolDesignForSolarPage.utilityDropDownValue()
})
When('I Select the rate from Select Rate dropDown', () => {
    toolDesignForSolarPage.selectRateDropdown()
})
When('I Click on the Create Account Button from the finance', () => {
    toolDesignForSolarPage.createAccountButton1()
})
When('I Select the rate from Select Rate dropDownfrom finance', () => {
    toolDesignForSolarPage.selectRateDropdownFinance()
})
When('I Select a value of the Rate dropdown from the LightReach Finance section', () => {
    toolDesignForSolarPage.selectRateDropdownValueFinance()
})
When('I Click on Create Quote button to create a Quote from the LightReach Finance section', () => {
    toolDesignForSolarPage.clickCreateQuoteLightReach()
})
When('I Click on Finalize button for LightReach', () => {
    toolDesignForSolarPage.clickOnFinalizeButton()
})
When('I Click on  Qualify button for LightReach', () => {
    toolDesignForSolarPage.clickOnQualifyButton()
})
When('I Select the DOB {string}', (value) => {
    toolDesignForSolarPage.TypeDOBTextbox(value)
})
When('I Enter the SSN number in the {string}', (value) => {
    toolDesignForSolarPage.TypeSNNTextbox(value)
})
When('I Enter the Job Title from {string}', (value) => {
    toolDesignForSolarPage.TypeJobTitleTextbox(value)
})
When('I Enter the Job Tenure Months form {string}', (value) => {
    toolDesignForSolarPage.TypeJobTenureMonthsTextbox(value)
})
When('I Enter the Employer Name in the {string}', (value) => {
    toolDesignForSolarPage.TypeEmployerNameTextbox(value)
})
When('I Select the Employment Status dropdown', () => {
    toolDesignForSolarPage.clickOnEmpStatusDropdown()
}) 
When('I Select a value from the Employment Status dropdown', () => {
    toolDesignForSolarPage.selectValueFromDropDown()
}) 
When('I Select the First Radio Button for Lightrich Qualify', () => {
    toolDesignForSolarPage.selectFirstRadioButton()
}) 
When('I Select the Second Radio Button for Lightrich Qualify', () => {
    toolDesignForSolarPage.selectSecondRadioButton()
}) 
When('I Click on Submit button to Qualify the finance', () => {
    toolDesignForSolarPage.clickSubmitButtonForQualify()
}) 
When('I Click on OK button for Apologies! pop up', () => {
    toolDesignForSolarPage.clickOnOkForPopUp()
}) 