Feature: Demo feature

    Let's go to test with WebdriverIO!
    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on first search result
        Then URL should match <ExpectedURL>

        Examples:
             | TestID | SearchItem | ExpectedURL |
             | DEMO_TC001  | WDIO  | https://webdriver.io/  |
             | DEMO_TC002  | CUCUMBER  | https://cucumber.io/  |