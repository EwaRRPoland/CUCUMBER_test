Feature: Calculator
 
#Calculator for adding two numbers
 
@positive
Scenario Outline: Add two numbers
#Add two numbers using the calculator
    Given user enters <First> into the calculator
    And user enters <Second> into the calculator
    When user presses "add"
    Then the result should equal <Result> on the screen
Examples:
| First | Second | Result |
| 40    | 70     | 110    |
| 30    | 40     | 70     |
| 60    | 30     | 90     |