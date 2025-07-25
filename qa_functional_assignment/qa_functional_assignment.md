# QA Functional Technical Assignment

# AC1: fligh search functionality
## List of test cases for Vueling flight booking website
- Verify basic flight search with Outbound and Return for only one passenger
- Verify basic flight search with Outbound and Return for multiple passengers
- Verify basic flight search only Outbound for only one passenger
- Verify basic flight search only Outbound for multiple passengers

- Verify flight search only Outbound from normal airports and Return from vueling global airport for only one passenger
- Verify flight search only Outbound from normal airports and Return from vueling global airport for multiple passengers
- Verify flight search only Outbound from vueling global airport and Return from normal airports for only one passenger
- Verify flight search only Outbound from vueling global airport and Return from normal airports for multiple passengers
- Verify flight search only Outbound from vueling global airport and Return from vueling global airport for only one passenger
- Verify flight search only Outbound from vueling global airport and Return from vueling global airport for multiple passengers
- Verify flight search only Outbound from vueling global airport for only one passenger
- Verify flight search only Outbound from vueling global airport for multiple passengers
- 
- Verify that outocomplete fills correctly by airport 
- Verify that outocomplete fills correctly by city name 
- Verify that outocomplete fills correctly by country name
- Verify that From and To Field only accepts letters (including special characters and accents that are correctly used)
- Verify that From and To field doesn´t accept same City, Country or Airport
- Verify that From cannot be empty
- Verify that To field cannot be empty

- verify I can select outbound and return date on the same day
- Verify I cannot select an outbound date before current date
- Verify I cannot select a Return Date before to the Outbound date
- Verify maximum return date doesn´t exceed maximum ammount of days (329 days)
- verify that outbound and return date cannot be empty
  
- Verify with different amount of adult, children and infants
- Verify with an amount of 2 infants and 1 adults
- Verify with an amount of more infants than adults
- Verify maximum amount of adult, children and infants
- Verify extra seat notification
- Verify that it can book with only children (age above 12)
- Verify that it cannot booked with only children under 12
- Verify that it cannot booked with only infants 
- Verify maximum total passengers (24 total) 
- Verify maximum total passengers with different combinations
  
- Verify accesibility with only keyboard navigation
- Verify accesibility score (WAVE)
- Verify different languages show correctly
  
- Verify correct timout of the page 
- Verify the page loads correctly with different network throttling
- Verify that the page is responsive in different devices/sizes (desktop, tablet, mobile)

# AC2: Develop one fligh search functionality
## Scenario: Verify that it cannot booked with only children under 12
Given a passenger under aged 12 navigates to the Vueling ticket booking website **http://tickets.vueling.com**  and selects a flight from Madrid to Barcelona
And I complete the request fields with the following information:
    |From       |MAD - Madrid   |
    |TO         |BCN - Barcelona|
    |Outbound   |28/06/2025     |
    |Return     |29/06/2025     |
and I Click on the Passenger section
and a pop with Passenger section is displayed
When I click on add 1 Childen 
And I click remove 1 Adult
Then a pop up appears with the title: **Children travelling alone**
And the following message appears **Children under age 12 on the date of travel must always be accompanied by an adult (under age 14 for Italian nationals travelling to/from Italy and under age 18 for Romanian nationals travelling to/from Romania). Minors under 16 who can travel alone cannot book connecting flights. Vueling does not provide any specific services or escorts for these passengers.
Children who do not meet the specified age requirements on the date of travel will be denied boarding.**
And a Link with the following name appears **Check the required documentation for children**
And I click on GOT IT! button
And I Select any outbound Flight
And I Select any return Flight
And I select Basic Bundle 
When I click on CONTINUE button
And the page of Who's travelling? appears
Then it requires to select the information of each person
And the following messages appears with information:
    |Enter the details exactly as they appear on the ID document.|
    |Passengers may travel alone as from 12 years of age (as from 14 if they are of Italian nationality travelling to/from Italy). In the case of connecting flights, minors under 16 cannot travel alone. Under-18s of Romanian nationality travelling to/from Romania must always travel with an adult.|
And Child 1 information is Required
When I complete the requested field with the following information:
    |Name           |Juan                                       |
    |Surname        |Child                                      |
    |Date of birth  |28/06/2014 (ex: child is 11 on flight date)|
    |Document       |Passport                                   |
    |Document  no.  |AB1231231                                  |
Then the field **Date of birth** shows as **Invalid date**
And I cannot continue to the next page until this date reflects the date of birth of a child from 12 years of age or onward ex: **"28/06/2013" (making the child 12)**

# AC3: Simulate test case with bug and report it
//Take into account that the bug should be in a reporting site such as Azure. So it would have extra information related such as:
//Related Work Item(Story stating the AC), Area Path Assign, Iteration Path, Date Found, Severity
# Title: AC2.1 - Pop Up should appear with traveling from Rome to Barcelona when only a minor is being selected

# Description:
When booking a flight from Rome to Barcelona and only selecting a minor in the a pop up should appear, currently its not showing for this specific location combination

# Steps to Reproduce:
Given a passenger under aged 12 navigates to the Vueling ticket booking website **http://tickets.vueling.com**  and selects a flight from Madrid to Barcelona
And I complete the request fields with the following information:
    |From       |FCO - Rome (Fiumicino)     |
    |TO         |BCN - Barcelona            |
    |Outbound   |28/06/2025                 |
    |Return     |29/06/2025                 |
and I Click on the Passenger section
and a pop with Passenger section is displayed
When I click on add 1 Childen 
And I click remove 1 Adult

# Expected Result:
Then a pop up appears with the title: **Children travelling alone**
And the following message appears **Children under age 12 on the date of travel must always be accompanied by an adult (under age 14 for Italian nationals travelling to/from Italy and under age 18 for Romanian nationals travelling to/from Romania). Minors under 16 who can travel alone cannot book connecting flights. Vueling does not provide any specific services or escorts for these passengers.
Children who do not meet the specified age requirements on the date of travel will be denied boarding.**
And a Link with the following name appears **Check the required documentation for children**
And I click on GOT IT! button

# Actual Result:
No Pop appears 

# Evidence:
Attached to bug item with a Red Square clearly showing the missing pop up
Attached evidence of corretly case showing the pop up

# Environment:
Environment: DEV
Browser: Chrome v138.0.7204.157
Date/Time of Execution: 25/07/2025

# AC4: Validate a field that accepts a date of birth
Check Format DD-MM-YYYY
Check only date is able to be input
Check changing system language and verify date format ex: YYYY-MM-DD, MM-DD-YYYY
Check Date exists ex: 30-02-2025 or 31-04-2025
Check Date in the future, ex:  tomorrow or next year 
Check Date older than 130 years




