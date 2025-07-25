# 🧪 QA Assignment: Functional & Technical Testing

## 📌 Overview

This repository contains the QA assignment for evaluating both **functional test analysis** and **technical test automation** skills.

### ✅ Functional Testing (Manual)
- Access any flight booking website and list all the test cases that come to mind to validate the flight search functionality (reaching the payment step is not necessary; it's enough if the search results are displayed). IMPORTANT: just briefly name the test cases you consider necessary to cover this functionality, without detailing them.

- Choose one of the test cases you listed and develop its definition. Provide the level of detail and structure you consider appropriate.

- Simulate that one of the test cases detects a bug. Make up the bug and report it, indicating the level of detail and structure you consider appropriate.

- How would you validate a field that accepts a date of birth?

### 🛠 Technical Testing (Automated)
## FRONTEND - Scenarios of expected tests

---

We want you to create 1 scenario using the following Playwright projects. You can find the details of the expected steps as follows.<br>
About the "way" of programming:<br>
  - use clear variable names<br>
  - avoid as much as possible hardcoding expected results or inputs<br>
  - feel free to comment those functions you might consider not clear enough by its own name<br>
  - add the assertions you may consider<br><br>

- First Scenario - Playwright:<br>
  
  <br>
  Precondition: You are not logged in<br>

  1. Go to https://www.saucedemo.com/<br>
  2. Log in<br>
  3. Press on the second article to access to the PDP page and verify the article has a title, description and price<br>
  4. Add the article to the cart<br>
  5. Verify the article is added<br>
  6. Proceed with the order until completion<br><br>


<br>

## BACKEND - Scenarios of expected tests

---

We want you to create 1 scenario using this mocha project and the Axios lib. If you never used Axios before, find the documentation here https://www.npmjs.com/package/axios<br>
You can find the details of the expected steps as follows.<br>

About the "way" of programming:<br>
  - use clear variable names<br>
  - avoid as much as possible hardcoding expected results or inputs<br>
  - feel free to comment those functions you might consider not clear enough by its own name<br>
  - add the assertions you consider<br><br>

- Scenario:<br>
  1. Do a GET on https://pokeapi.co/api/v2/pokemon/pikachu<br>
  2. Verify the number of "moves" the pokemon has<br>
  3. Verify the pokemon "types" is "electric"<br>
