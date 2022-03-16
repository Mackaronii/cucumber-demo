Feature: Is it a perfect square?
    For those who want to know if a = b * b

Scenario: 25 is a perfect square
    Given the number is 25
    When I check if the number is a perfect square
    Then I should be told "Yes"