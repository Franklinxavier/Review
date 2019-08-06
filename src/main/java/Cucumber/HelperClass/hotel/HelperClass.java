package Cucumber.HelperClass.hotel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import Adactin.Pages.com.LogInPage;
import Adactin.Pages.com.SearchHotelPage;

public class HelperClass {

	public WebDriver driver;
	//Login Page
	public LogInPage lp;
	
	//search hotel page
	public SearchHotelPage shp;
	
	
	public LogInPage getLp() {
		if(lp==null) {
			lp=new LogInPage(driver);
		}
		return lp;
	}
	
	public SearchHotelPage getShp() {
		if (shp==null) {
			shp=new SearchHotelPage(driver);
		}
		return shp;
	}
	
	//Object Repository 
	public HelperClass(WebDriver cdriver) {
		this.driver=cdriver;
		PageFactory.initElements(driver, this);
	}
}
