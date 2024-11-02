Feature: Create New Customer For Job Type >> Hvac

  Scenario Outline:Create a new Customer Job Type Solar

    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When I click on Leads tab
    When I Click on Add Lead button
    When i enter Address "<address>"
    When i enter First name "<FirstName>"
    When i Enter Last name "<LastName>"
    When i Enter email "<email>"
    When i Enter Phone Number "<Phone Number>"
    When i Select Job Type from DropDown
    When i Select Job Type as Hvac
    When i click on Create Lead button

    Examples:
      | username                   | password    | address                                                       | FirstName | LastName  | email                | Phone Number |
      | soumya.das@expansionjs.com | Soumya@1992 | 5047 Country Lane, San Jose, California, 95129, United States | Alice     | Firstimer | abcd1.asd@gmailll.cog | 3256987410   |
