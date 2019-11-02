package util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserFactory {
	// global, so all methods can use
		static WebDriver driver;

		public static WebDriver startBrowser() {
			// Set Chrome Driver Properties
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\new\\eclipse-workspaceGeico\\BDDParamatization\\src\\driver\\chromedriver.exe");
			// Create ChromeDriver object and launch chrome browser
			WebDriver driver = new ChromeDriver();		
			
			// return the driver to the test class
			driver.manage().deleteAllCookies();
			driver.get("http://webdriveruniversity.com/index.html");
			driver.manage().window().maximize();
			String actualtitle = driver.getTitle();
			System.out.println(actualtitle);
			return driver;
		}
	
	
	
	
	

}
