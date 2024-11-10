Feature: Create New toolDesign>>Solar SOLRITE

  Scenario Outline: Create a new tooldesign for Job Type Solar LightReach
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When i click on Customer tab
    When I click on Solar tab
    When I Click on an Existing Customer
    When I click on New Proposal button
    When I Select Job Type dropdown
    When I Select Job Type as solar
    When I click on Create Proposal button
    When I Click on AI Design button
    When I click on Yes button from the pop up
    When I click on Utility Dropdown
    When I Enter the value in the utility "<Utility>"
    When I select the first option from the dropdown
    When I Click on Start Design Button
    When I Click on Run AI Design Button
    When I Click on Next button
    When I Click on the Battery option
    When I Select the Battery from Battery Storage
    When I Select the finance as LightReach


    When I Click on the Utility from the finance section
    When I Select a Utility from the dropdown
    When I Click on the Create Account Button for the Solrite


    When I Select a Pricing from the Pricing dropdown
    When I Select a pricing a value from the dropdown
    When I Click on Create Quote button to create a Quote


   Examples:
   | username                   | password    | Utility                   |
   | soumya.das@expansionjs.com | Soumya@1992 | Pacific Gas & Electric Co |

     Scenario Outline: Create a new tooldesign for Job Type Solar SOLRITE
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When i click on Customer tab
    When I click on Solar tab
    When I Click on an Existing Customer
    When I click on New Proposal button
    When I Select Job Type dropdown
    When I Select Job Type as solar
    When I click on Create Proposal button
    When I Click on AI Design button
    When I click on Yes button from the pop up
    When I click on Utility Dropdown
    When I Enter the value in the utility "<Utility>"
    When I select the first option from the dropdown
    When I Click on Start Design Button
    When I Click on Run AI Design Button
    When I Click on Next button
    When I Click on the Battery option
    When I Select the Battery from Battery Storage
    When I Select the finance as SOLRITE
    When I Click on the Create Account Button for the Solrite
    When I Select a rate for Escalator Rate
    When I Select a rate from the dropdown
    When I Select a Pricing from the Pricing dropdown
    When I Select a pricing a value from the dropdown
    When I Click on Create Quote button to create a Quote


   Examples:
   | username                   | password    | Utility                   |
   | soumya.das@expansionjs.com | Soumya@1992 | Pacific Gas & Electric Co |


