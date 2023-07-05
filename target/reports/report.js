$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Google1.feature");
formatter.feature({
  "name": "To Test the Google search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser window is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on search page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003csearchTerm\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchTerm"
      ]
    },
    {
      "cells": [
        "India"
      ]
    },
    {
      "cells": [
        "USA"
      ]
    },
    {
      "cells": [
        "Korean"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser window is open",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.browser_window_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_is_on_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters India",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_enters_SearchTerm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_is_navigated_to_search_results()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser window is open",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.browser_window_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_is_on_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters USA",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_enters_SearchTerm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_is_navigated_to_search_results()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser window is open",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.browser_window_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on search page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_is_on_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Korean",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_enters_SearchTerm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition1.GoogleSearch.user_is_navigated_to_search_results()"
});
formatter.result({
  "status": "passed"
});
});