package Adactin.TestRunner.Cucumber;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import Adactin.BaseClass.hotel.BaseClass;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
  
@RunWith(Cucumber.class)
@CucumberOptions(
	plugin = {"com.cucumber.listener.ExtentCucumberFormatter:src\\test\\resource\\com\\test\\reports\\extentreport.html",
			"pretty",
			"html:src\\test\\resource\\com\\test\\reports",
			"json:src\\test\\resource\\com\\test\\reports\\report.json",
			"junit:src\\test\\resource\\com\\test\\reports\\report.xml"
	},
	features = "AdactinHotelFeature",
	glue = "Adactin.StepDef.Cucumber",
//	tags = "@RunThisDude",
	monochrome = true,
	dryRun = false,
	strict = true
	
	
	)
public class TestRunner {

	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws Exception {
	 driver = BaseClass.getBrowser("chrome");
	}
	
	
	  @AfterClass 
	  public static void tearDown() throws InterruptedException { 
		  Thread.sleep(3000);
		  driver.quit();
		  }
	  
	  
	 
}
