$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/new/eclipse-workspaceGeico/BDDParamatization/src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Valid user login",
  "description": "",
  "id": "valid-user-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "valid user login to account",
  "description": "",
  "id": "valid-user-login;valid-user-login-to-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User Enter Id and Password",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User is able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on Online Test console",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Enter_Id_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_is_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_is_on_Online_Test_console()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Get quote on new car",
  "description": "",
  "id": "valid-user-login;get-quote-on-new-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User is no WebUniv",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Test WebElement Click",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Test JavaScript Click",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Action Move Click",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "go back to main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_no_WebUniv()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.test_WebElement_Click()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.test_JavaScript_Click()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.action_Move_Click()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.go_back_to_main_page()"
});
formatter.result({
  "status": "skipped"
});
});