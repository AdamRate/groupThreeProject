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

public class FaqTest {
	private WebDriver webDriver;
	
	@Before 
	public void before() throws AWTException 
	{
		
	ChromeOptions options = new ChromeOptions();
	options.addArguments("--start-maximized");
			
			webDriver = new ChromeDriver(options);		
		}
	
	@Test
	public void clickCollapseArea() throws InterruptedException {
		webDriver.navigate().to("https://adamrate.github.io/groupThreeProject/#/faq");
		Thread.sleep(500);
		WebElement e1 = webDriver.findElement(By.cssSelector("#accordion > div:nth-child(1) > div.panel-heading > h4 > a"));
		Thread.sleep(500);
		e1.click();
		Thread.sleep(500);
		WebElement e2 = webDriver.findElement(By.cssSelector("#accordion > div:nth-child(2) > div.panel-heading > h4 > a"));
		e2.click();
		
	}
	
	@After
	public void closeWebDriver() 
	{
		webDriver.quit();
	} 
	
	
}
