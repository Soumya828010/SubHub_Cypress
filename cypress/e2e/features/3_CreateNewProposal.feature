Feature: Create New Proposal Page


  Scenario Outline: Create a new Proposal for "Solar"
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


        Examples:
      | username | password |
      | soumya.das@expansionjs.com  | Soumya@1992 |

   Scenario Outline: Create a new Proposal for "Roof"
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When i click on Customer tab
    When I click on Solar tab
    When I Click on an Existing Customer
    When I click on New Proposal button
    When I Select Job Type dropdown
    When I Select Job Type as Roof
    When I click on Create Proposal button


        Examples:
      | username | password |
      | soumya.das@expansionjs.com  | Soumya@1992 |

   Scenario Outline: Create a new Proposal for "Hvac"
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

   Scenario Outline: Create a new Proposal for "Fence"
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When i click on Customer tab
    When I click on Solar tab
    When I Click on an Existing Customer
    When I click on New Proposal button
    When I Select Job Type dropdown
    When I Select Job Type as Fence
    When I click on Create Proposal button


        Examples:
      | username | password |
      | soumya.das@expansionjs.com  | Soumya@1992 |


   Scenario Outline: Create a new Proposal for "Battery"
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When i click on Customer tab
    When I click on Solar tab
    When I Click on an Existing Customer
    When I click on New Proposal button
    When I Select Job Type dropdown
    When I Select Job Type as Battery
    When I click on Create Proposal button


        Examples:
      | username | password |
      | soumya.das@expansionjs.com  | Soumya@1992 |

   Scenario Outline: Create a new Proposal for "Roof With Solar"
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When i click on Customer tab
    When I click on Solar tab
    When I Click on an Existing Customer
    When I click on New Proposal button
    When I Select Job Type dropdown
    When I Select Job Type as Roof With Solar
    When I click on Create Proposal button


        Examples:
      | username | password |
      | soumya.das@expansionjs.com  | Soumya@1992 |
