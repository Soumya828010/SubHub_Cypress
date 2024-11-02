Feature: Create New Proposal Page>>Hvac


Scenario Outline: Create a new Proposal for Job Type Hvac
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When i click on Customer tab
    When I click on Solar tab
    When I Click on an Existing Customer
    When I click on New Proposal button
    When I Select Job Type dropdown
    When I Select Job Type as Hvac
    When I click on Create Proposal button


        Examples:
      | username | password |
      | soumya.das@expansionjs.com  | Soumya@1992 |