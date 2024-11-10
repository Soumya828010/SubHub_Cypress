import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LightReachPage from '../../e2e/pages/LightReachPage/LightReachPage'

const lightReachPage = new LightReachPage()


When('I Select the finance as LightReach', () => {
    lightReachPage.clickLightReachTab()
})
