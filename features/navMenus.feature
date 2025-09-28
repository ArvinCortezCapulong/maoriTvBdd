Feature: Test
I want to check the Navigation Menus

Scenario: Check the Navigation Menus
Given I open the browser
When I navigate to the homepage
Then I can see the following navigation menus:
      | Home        |
      | Categories  |
      | Tamariki Hā |
      | Haka        |
      | Live TV     |
      | News        |