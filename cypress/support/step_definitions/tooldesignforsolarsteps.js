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

