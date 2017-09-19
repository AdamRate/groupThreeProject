package webTests;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.InputEvent;
import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

public class HomePageTest {

private WebDriver webDriver;
private Robot r; 


	
@Before 
	public void before() throws AWTException 
	{
		
	ChromeOptions options = new ChromeOptions();
	options.addArguments("--start-maximized");
			
			webDriver = new ChromeDriver(options);		
		}

@Test
public void HoverElement () throws AWTException, InterruptedException {
	
	Robot r = new Robot();
	webDriver.navigate().to("https://adamrate.github.io/groupThreeProject/#/home");
	r.mouseMove(1790, 200);
	int buttons = InputEvent.BUTTON1_DOWN_MASK;
	//r.delay(100);
	Thread.sleep(500);
	r.mouseMove(1790, 480);
	r.mousePress(buttons);
	Thread.sleep(500);
	r.mouseMove(1700, 480);
	r.mouseRelease(buttons);
	Thread.sleep(500);
	r.mouseMove(1500, 480);
	r.mouseMove(1400, 480);
}



@Test
public void clickImageBanner() throws AWTException, InterruptedException {
	
	Robot r = new Robot();
	webDriver.navigate().to("https://adamrate.github.io/groupThreeProject/#/home");
	r.mouseMove(110, 450);
//	r.delay(500);
	Thread.sleep(500);
	int buttons = InputEvent.BUTTON1_DOWN_MASK;
	r.mousePress(buttons);
	Thread.sleep(500);
	//r.delay(500);
	r.mouseRelease(buttons);
}


@Test
public void playTrailer() throws AWTException, InterruptedException {
	
	Robot r = new Robot();
	webDriver.navigate().to("https://adamrate.github.io/groupThreeProject/#/home");
	
	r.mouseMove(1670, 990);
	Thread.sleep(500);
	//r.delay(100);
	int buttons = InputEvent.BUTTON1_DOWN_MASK;
	
	r.mousePress(buttons);
	r.mouseRelease(buttons);
	Thread.sleep(500);
	r.mousePress(buttons);
	r.mouseRelease(buttons);
	Thread.sleep(500);
	r.mousePress(buttons);
	r.mouseRelease(buttons);
	Thread.sleep(500);
	r.mousePress(buttons);
	r.mouseRelease(buttons);
	Thread.sleep(500);
	r.mouseMove(850, 500);
	Thread.sleep(500);
	webDriver.findElement(By.xpath("/html/body/div[1]/div/div[3]/div[2]/iframe")).click();
	
}


@After
public void closeWebDriver() 
{
	webDriver.quit();
}




}
