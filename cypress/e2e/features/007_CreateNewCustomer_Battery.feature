Feature: Create New Customer For >> Battery
   
   Scenario Outline:Create a new Customer Job Type Battery
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    When i click on Customer tab
    When i click on New Customer button
    When i enter Address "<address>"
    When i enter First name "<FirstName>"
    When i Enter Last name "<LastName>"
    When i Enter email "<email>"
    When i Enter Phone Number "<Phone Number>"
    When i Select Job Type from DropDown
    When i Select Job Type Battery
    When i click on Create Customer button

    Examples:
      | username                   | password    | address                                                       | FirstName | LastName  | email                | Phone Number |
      | soumya.das@expansionjs.com | Soumya@1992 | 5047 Country Lane, San Jose, California, 95129, United States | Alice1    | Firstimer | abcd.asd@gmailll.cog | 3256987410   |
