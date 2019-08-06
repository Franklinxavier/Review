package Adactin.Pages.com;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotelPage {

	public WebDriver driver;
	
	@FindBy(id="location")
	private WebElement hotelLocation;
	@FindBy(id="hotels")
	private WebElement hotelName;
	@FindBy(id="room_type")
	private WebElement roomType;
	@FindBy(id="room_nos")
	private WebElement no_of_rooms;
	@FindBy(id="datepick_in")
	private WebElement checkInDate;
	@FindBy(id="datepick_out")
	private WebElement checkOutDate;
	@FindBy(id="checkin_span")
	private WebElement dateAlert;
	@FindBy(id="Submit")
	private WebElement searchBtn;
	
	
	
	
	//Actions
	
	public WebElement getHotelLocation() {
		return hotelLocation;
	}



	public WebElement getHotelName() {
		return hotelName;
	}



	public WebElement getRoomType() {
		return roomType;
	}



	public WebElement getNo_of_rooms() {
		return no_of_rooms;
	}



	public WebElement getCheckInDate() {
		return checkInDate;
	}



	public WebElement getCheckOutDate() {
		return checkOutDate;
	}
	
	public WebElement getDateAlert() {
		return dateAlert;
	}
	
	public  WebElement getSearchBtn() {
		return searchBtn;
	}
	
	
	
	//Get The Driver
	public SearchHotelPage(WebDriver cdriver) {
		this.driver=cdriver;
		PageFactory.initElements(driver, this);
	}
	
}//End Of Class
