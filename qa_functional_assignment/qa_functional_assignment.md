# QA Functional Technical Assignment

---

## AC1: Fligh Search Functionality

### List of Test Cases for Vueling Flight Booking Website

- Verify basic flight search with Outbound and Return for only one passenger  
- Verify basic flight search with Outbound and Return for multiple passengers  
- Verify basic flight search only Outbound for only one passenger  
- Verify basic flight search only Outbound for multiple passengers  

- Verify flight search only Outbound from normal airports and Return from Vueling global airport for only one passenger  
- Verify flight search only Outbound from normal airports and Return from Vueling global airport for multiple passengers  
- Verify flight search only Outbound from Vueling global airport and Return from normal airports for only one passenger  
- Verify flight search only Outbound from Vueling global airport and Return from normal airports for multiple passengers  
- Verify flight search only Outbound from Vueling global airport and Return from Vueling global airport for only one passenger  
- Verify flight search only Outbound from Vueling global airport and Return from Vueling global airport for multiple passengers  
- Verify flight search only Outbound from Vueling global airport for only one passenger  
- Verify flight search only Outbound from Vueling global airport for multiple passengers  

- Verify that autocomplete fills correctly by airport  
- Verify that autocomplete fills correctly by city name  
- Verify that autocomplete fills correctly by country name  
- Verify that From and To fields only accept letters (including special characters and accents that are correctly used)  
- Verify that From and To fields don’t accept same City, Country, or Airport  
- Verify that From cannot be empty  
- Verify that To field cannot be empty  

- Verify I can select outbound and return date on the same day  
- Verify I cannot select an outbound date before current date  
- Verify I cannot select a return date before the outbound date  
- Verify maximum return date doesn’t exceed maximum amount of days (329 days)  
- Verify that outbound and return date cannot be empty  

- Verify with different amount of adult, children and infants  
- Verify with an amount of 2 infants and 1 adult  
- Verify with an amount of more infants than adults  
- Verify maximum amount of adult, children, and infants  
- Verify extra seat notification  
- Verify that it can book with only children (age above 12)  
- Verify that it cannot book with only children under 12  
- Verify that it cannot book with only infants  
- Verify maximum total passengers (24 total)  
- Verify maximum total passengers with different combinations  

- Verify accessibility with only keyboard navigation  
- Verify accessibility score (WAVE)  
- Verify different languages show correctly  

- Verify correct timeout of the page  
- Verify the page loads correctly with different network throttling  
- Verify that the page is responsive in different devices/sizes (desktop, tablet, mobile)  

---

## AC2: Develop One Fligh Search Functionality

### Scenario: Verify That It Cannot Be Booked With Only Children Under 12

Given a passenger under aged 12 navigates to the Vueling ticket booking website **http://tickets.vueling.com** and selects a flight from Madrid to Barcelona  
And I complete the request fields with the following information:

| Field      | Value            |
|------------|------------------|
| From       | MAD - Madrid     |
| To         | BCN - Barcelona  |
| Outbound   | 28/06/2025       |
| Return     | 29/06/2025       |

And I click on the Passenger section  
And a pop with Passenger section is displayed  
When I click on add 1 Childen  
And I click remove 1 Adult  
Then a pop-up appears with the title: **Children travelling alone**  
And the following message appears:  

> **Children under age 12 on the date of travel must always be accompanied by an adult (under age 14 for Italian nationals travelling to/from Italy and under age 18 for Romanian nationals travelling to/from Romania). Minors under 16 who can travel alone cannot book connecting flights. Vueling does not provide any specific services or escorts for these passengers. Children who do not meet the specified age requirements on the date of travel will be denied boarding.**

And a link with the following name appears: **Check the required documentation for children**  
And I click on GOT IT! button  
And I select any outbound flight  
And I select any return flight  
And I select Basic Bundle  
When I click on CONTINUE button  
And the page of Who's travelling? appears  
Then it requires to select the information of each person  
And the following messages appear with information:

| Message |
|---------|
| Enter the details exactly as they appear on the ID document. |
| Passengers may travel alone as from 12 years of age (as from 14 if they are of Italian nationality travelling to/from Italy). In the case of connecting flights, minors under 16 cannot travel alone. Under-18s of Romanian nationality travelling to/from Romania must always travel with an adult. |

And Child 1 information is required  
When I complete the requested field with the following information:

| Field          | Value                                       |
|----------------|---------------------------------------------|
| Name           | Juan                                        |
| Surname        | Child                                       |
| Date of birth  | 28/06/2014 (ex: child is 11 on flight date) |
| Document       | Passport                                    |
| Document no.   | AB1231231                                   |

Then the field **Date of birth** shows as **Invalid date**  
And I cannot continue to the next page until this date reflects the date of birth of a child from 12 years of age or onward e.g. **28/06/2013** (making the child 12)  

---

## AC3: Simulate Test Case with Bug and Report It

> Take into account that the bug should be in a reporting site such as Azure. So it would have extra information related such as:  
> Related Work Item (Story stating the AC), Area Path, Assign, Iteration Path, Date Found, Severity

### Title:
**AC2.1 - Pop-Up Should Appear with Traveling from Rome to Barcelona When Only a Minor Is Being Selected**

### Description:
When booking a flight from Rome to Barcelona and only selecting a minor, a pop-up should appear. Currently, it’s not showing for this specific location combination.

### Steps to Reproduce:
Given a passenger under aged 12 navigates to the Vueling ticket booking website **http://tickets.vueling.com** and selects a flight from Rome to Barcelona  
And I complete the request fields with the following information:

| Field    | Value                  |
|----------|------------------------|
| From     | FCO - Rome (Fiumicino) |
| To       | BCN - Barcelona        |
| Outbound | 28/06/2025             |
| Return   | 29/06/2025             |

And I click on the Passenger section  
And a pop with Passenger section is displayed  
When I click on add 1 Childen  
And I click remove 1 Adult  

### Expected Result:
Then a pop-up appears with the title: **Children travelling alone**  
And the following message appears:  
> *(Same message as in AC2)*  
And a link with the following name appears **Check the required documentation for children**  
And I click on GOT IT! button  

### Actual Result:
No pop-up appears  

### Evidence:
- Attached to bug item with a red square clearly showing the missing pop-up  
- Attached evidence of correctly working case showing the pop-up  

### Environment:
- Environment: DEV  
- Browser: Chrome v138.0.7204.157  
- Date/Time of Execution: 25/07/2025  

---

## AC4: Validate a Field That Accepts a Date of Birth

- Check format DD-MM-YYYY  
- Check only date is able to be input  
- Check changing system language and verify date format e.g. YYYY-MM-DD, MM-DD-YYYY  
- Check date exists e.g. 30-02-2025 or 31-04-2025  
- Check date in the future, e.g. tomorrow or next year  
- Check date older than 130 years