package webTests;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.gargoylesoftware.htmlunit.javascript.host.Console;

public class PricesTest {

private Robot r;
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
	public void buyTicket() throws InterruptedException, AWTException {
		Robot r = new Robot();
		webDriver.navigate().to("https://adamrate.github.io/groupThreeProject/#/price");
		
		Thread.sleep(500);
		r.mouseMove(1300, 680);
		
		Thread.sleep(500);
		int buttons = InputEvent.BUTTON1_DOWN_MASK;
		
		r.mousePress(buttons);
		r.mouseRelease(buttons);

		
		Thread.sleep(1000);
		
		WebDriverWait delay = new WebDriverWait(webDriver, 120);
		delay.until(ExpectedConditions.visibilityOfElementLocated(By.name("injectedUl")));
		
		webDriver.switchTo().frame(webDriver.findElement(By.name("injectedUl")));
		webDriver.findElement(By.id("email")).sendKeys("qacthreegivemoney@gmail.com");
		webDriver.findElement(By.id("password")).sendKeys("PA$$w0rd");
		
		r.mouseMove(500, 550);
		r.mousePress(buttons);
		r.mouseRelease(buttons);
		System.out.println("working");
		
	
		WebDriverWait halt = new WebDriverWait(webDriver, 120);
		halt.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#main > xo-header")));
		
		r.mouseMove(500, 700); 
		System.out.println("f**k i hate you ");
		
		try {
			TimeUnit.SECONDS.sleep(2);
			} catch (InterruptedException e) {
			e.printStackTrace();
			}
		
		r.mousePress(buttons);
		System.out.println("kill me now ");
		
		
		r.mouseRelease(buttons);
		System.out.println("evil die");
			
	}
	
	
	
	@After
	public void closeWebDriver() 
	{
		webDriver.quit();
	} 

}
