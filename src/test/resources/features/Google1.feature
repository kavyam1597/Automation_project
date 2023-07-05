Feature: To Test the Google search functionality

  Scenario Outline: Validate google search is working
    Given browser window is open
    And user is on search page
    When user enters <searchTerm>
    Then user is navigated to search results

    Examples: 
      | searchTerm |
      | India      |
      | USA        |
      | Korean     |
