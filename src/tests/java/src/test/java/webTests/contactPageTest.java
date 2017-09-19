package webTests;

import java.awt.AWTException;
import java.awt.Robot;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;

public class contactPageTest {
	private WebDriver webDriver;
	
	//private Actions builder;
		
	@Before 
		public void before() throws AWTException 
		{
			
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
				
				webDriver = new ChromeDriver(options);		
			}

@Test
public void contactFrom() throws InterruptedException{
	//Actions builder = new Actions(webDriver);
	
	webDriver.navigate().to("https://adamrate.github.io/groupThreeProject/#/contact");
		
	
			webDriver.findElement(By.cssSelector("#name")).sendKeys("Auto Test");
			webDriver.findElement(By.cssSelector("#email")).sendKeys("autontest@gmail.com");
			webDriver.findElement(By.cssSelector("#phone")).sendKeys("07924195649");
			webDriver.findElement(By.cssSelector("#message")).sendKeys("This is an Automated Test done by Selenium");
			Thread.sleep(500);
			webDriver.findElement(By.cssSelector("#gform > button")).click();
		
}

@After
public void closeWebDriver() 
{
	webDriver.quit();
} 
}
