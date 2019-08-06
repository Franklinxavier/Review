package Adactin.StepDef.Cucumber;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Adactin.BaseClass.hotel.BaseClass;
import Adactin.TestRunner.Cucumber.TestRunner;
import Cucumber.HelperClass.hotel.HelperClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef extends BaseClass {

	 public static WebDriver driver=TestRunner.driver;
	 public static HelperClass pom=new HelperClass(driver);
	
	
	 //TC-101 as Background
	
	 @Given("^user already in login page$")
	 public void user_already_in_login_page()  {
	     getUrl("http://www.adactin.com/HotelApp/index.php");
	     
	 }

	 @When("^user enters the '(.*)' in login page$")
	 public void user_enters_the_myemailid_gmail_com_in_login_page(String userName)  {
	     inputValuestoWebelement(pom.getLp().getUsernameField(), userName);
	     
	 }

	 @When("^user enters '(.*)' in login page$")
	 public void user_enters_apdina_in_login_page(String password)  {
	     inputValuestoWebelement(pom.getLp().getPasswordField(), password);
	     
	 }

	 @Then("^user clicks on the login the button$")
	 public void user_clicks_on_the_login_the_button()  {
	     clickonWebelement(pom.getLp().getLoginBtn());
	     
	 }


	
	 
	 //======================TC-102 & TC-103====================================>
	 
	 //TC-102 & TC-103
	 
	 @When("^user select the location'(.*)'$")
	 public void user_select_the_location_Sydney(String location)  {
		 selectDropDownOption(pom.getShp().getHotelLocation(), "visibletext", location);
	     
	 }

	 @When("^user select the hotel '(.*)'$")
	 public void user_select_the_hotel_Hotel_Creek(String hotelName)  {
		 selectDropDownOption(pom.getShp().getHotelName(), "visibletext", hotelName); 
	     
	 }

	 @When("^user select room type '(.*)'$")
	 public void user_select_room_type_Standard(String roomType)  {
		 selectDropDownOption(pom.getShp().getRoomType(), "visibletext", roomType);
	     
	 }

	 @When("^user Select no-of-rooms '(.*)'$")
	 public void user_Select_no_of_rooms(String noOfRooms)  {
		 selectDropDownOption(pom.getShp().getNo_of_rooms(), "value", noOfRooms);
	     
	 }

	 @When("^user enters check in date '(.*)' later than check out date$")
	 public void user_enters_check_in_date_later_than_check_out_date(String cIdate)  {
		 WebElement checkInDate = pom.getShp().getCheckInDate();
		 checkInDate.clear();
	     inputValuestoWebelement(pom.getShp().getCheckInDate(), cIdate);
	     
	     
	 }

	 @When("^user enters check out data '(.*)'$")
	 public void user_enters_check_out_data(String cOdate)  {
		 WebElement checkOutDate = pom.getShp().getCheckOutDate();
		 checkOutDate.clear();
		 inputValuestoWebelement(pom.getShp().getCheckOutDate(), cOdate);
	     
	 }

	 @When("^user click on the search button in search hotel page$")
	 public void user_click_on_the_search_button_in_search_hotel_page()  {
		 clickonWebelement(pom.getShp().getSearchBtn());
	     
	 }

	 @Then("^user verifies checkindate should not be later than checkoutdate$")
	 public void user_verifies_checkindate_should_not_be_later_than_checkoutdate()  {
		 boolean isDisp = elementIsDisplayed(pom.getShp().getDateAlert());
		 Assert.assertEquals(true, isDisp);
	     
	 }


	 
	 
	 
	 
}//class ends here
