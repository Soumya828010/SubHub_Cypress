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
    When I Click on the Create Account Button from the finance
    When I Select the rate from Select Rate dropDownfrom finance
    When I Select a value of the Rate dropdown from the LightReach Finance section
    When I Click on Create Quote button to create a Quote from the LightReach Finance section
    When I Click on Finalize button for LightReach
    When I Click on  Qualify button for LightReach
    When I Select the DOB "<Date Of Birth>"
    When I Enter the SSN number in the "<SNN>"
    When I Enter the Job Title from "<Job Title>"
    When I Enter the Job Tenure Months form "<Job Tenure Months>"
    When I Enter the Employer Name in the "<Employer Name>"
    When I Select the Employment Status dropdown 
    When I Select a value from the Employment Status dropdown
    When I Select the First Radio Button for Lightrich Qualify
    When I Select the Second Radio Button for Lightrich Qualify
    When I Click on Submit button to Qualify the finance
    When I Click on OK button for Apologies! pop up



   Examples:
   | username                   | password    | Utility                   | Date Of Birth | SNN       | Job Title | Job Tenure Months | Employer Name |
   | soumya.das@expansionjs.com | Soumya@1992 | Pacific Gas & Electric Co | 06/22/1996    | 000000004 | Test Job  | 360               | Alice Tester  |

  