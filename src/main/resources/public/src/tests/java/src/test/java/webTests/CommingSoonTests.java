package webTests;

import java.awt.AWTException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class CommingSoonTests {
	private WebDriver webDriver;
	
	
	@Before 
	public void before() throws AWTException 
	{
		
	ChromeOptions options = new ChromeOptions();
	options.addArguments("--start-maximized");
			
			webDriver = new ChromeDriver(options);		
		}

	
	
	
	@Test
	public void clickButtons() throws InterruptedException {
		webDriver.navigate().to("https://adamrate.github.io/groupThreeProject/#/futureFilms");
		Thread.sleep(500); 
		webDriver.findElement(By.cssSelector("body > div.ng-scope > div > div > div.row > div:nth-child(1) > div > div.card-footer > a")).click();
	}	
	
	
	
 @After
public void closeWebDriver() 
{
	webDriver.quit();
} 
	

}
