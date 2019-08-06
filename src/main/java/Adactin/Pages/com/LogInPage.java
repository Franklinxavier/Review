package Adactin.Pages.com;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Adactin.BaseClass.hotel.BaseClass;

public class LogInPage extends BaseClass {

	WebDriver driver;
	@FindBy(id="username")
	private WebElement usernameField;

	@FindBy(id="password")
	private WebElement passwordField;
	
	@FindBy(id="login")
	private WebElement loginBtn;
	
	
	//Actions
	
	public WebElement getUsernameField() {
		return usernameField;
	}
	
	public WebElement getPasswordField() {
		return passwordField;
	}
	
	public WebElement getLoginBtn() {
		return loginBtn;
	}
	
	//Getting The driver and assign 
	
	//PageFactory Init
	
	public LogInPage(WebDriver cdriver) {
		this.driver=cdriver;
		PageFactory.initElements(driver, this);
		
	}
}
