package stepdefinition1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class GoogleSearch {
	
	WebDriver driver;

	@Given("browser window is open")
	public void browser_window_is_open() {
	    System.out.println("Inside step: Browser is open");
	    System.setProperty("webdriver.chrome.driver", "C:\\\\Users\\\\0022IV744\\\\Desktop\\\\Mine\\\\FST\\\\chromedriver_win32 (1)\\\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    
	}

	@And("user is on search page")
	public void user_is_on_search_page() throws InterruptedException {
		System.out.println("Inside step: User is on search page");
		driver.navigate().to("https://www.google.com/");
		Thread.sleep(3000);
	}

	@When("^user enters (.*)$")
	public void user_enters_SearchTerm(String searchTerm) throws InterruptedException {
		System.out.println("Inside step: User enters searchTerm");
		driver.findElement(By.name("q")).sendKeys(searchTerm); //types the term
		Thread.sleep(3000);
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER); //hits enter
		Thread.sleep(3000);
	}

	@Then("user is navigated to search results")
	public void user_is_navigated_to_search_results() throws InterruptedException {
		System.out.println("Inside step: User navigated to search results");
		Thread.sleep(3000);
		driver.close();
	}
}
