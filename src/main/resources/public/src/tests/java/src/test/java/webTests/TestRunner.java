package webTests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

// making a suit 
@RunWith(Suite.class)

//creating a method that can call a class 
@Suite.SuiteClasses(
		{
			
			//calls the class name with the tests on. put a comer at the end and add more classes
			
			HomePageTest.class	
			//contactPageTest.class
		}
	)

public class TestRunner 
{

	
	
}