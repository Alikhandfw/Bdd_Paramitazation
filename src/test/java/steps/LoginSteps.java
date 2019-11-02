package steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginSteps {
	WebDriver driver;
	LoginPage loginpage;

	// to make it global so don't need to create object in each method

	
	  @Before public void beforeRun() { driver = BrowserFactory.startBrowser();
	  loginpage = PageFactory.initElements(driver, LoginPage.class);
	  
	  }
	  
	
	  @Given("^User Enter Id and Password$")
	  public void user_Enter_Id_and_Password()  {
	     
	  }

	  @Then("^User is able to login$")
	  public void user_is_able_to_login() {
	     
	  }

	  @Then("^user is on Online Test console$")
	  public void user_is_on_Online_Test_console()  {
	      
	  }

	  @Given("^User is no WebUniv$")
	  public void user_is_no_WebUniv() {
	     
	  }

	  @When("^Test WebElement Click$")
	  public void test_WebElement_Click() {
	      
	  }

	  @Then("^Test JavaScript Click$")
	  public void test_JavaScript_Click() {
	      
	  }

	  @Then("^Action Move Click$")
	  public void action_Move_Click() {
	    
	  }

	  @Then("^go back to main page$")
	  public void go_back_to_main_page()  {
	     
	  }


	
	
	
	
	
	

}
