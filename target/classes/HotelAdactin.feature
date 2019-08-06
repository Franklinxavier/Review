	Feature: Hotel Adactin End To End Test Case
	Background: Book Rooms In Hotel Adactin
	Given  user already in login page
	When user enters the 'iamtheuser' in login page
	And user enters 'V9WLK9' in login page
	Then user clicks on the login the button
	
	@RunThisDude
	Scenario Outline:To Verify Whether The Check-Out Date Field Accepts a Later Date Than Checkin Date.
	When user select the location'<location>'
	And user select the hotel '<hotel>'
	And user select room type '<room type>'
	And user Select no-of-rooms '<no-of-rooms>'
	And user enters check in date '<checkIn Date>' later than check out date 
	And user enters check out data '<checkOutDate>'
	And user click on the search button in search hotel page
	Then user verifies checkindate should not be later than checkoutdate
	
	
	Examples:
	| location | hotel       | room type | no-of-rooms | checkIn Date | checkOutDate |
	| Sydney   | Hotel Creek | Standard  | 1           | 07/07/2019   | 05/07/2019   |
	| Sydney   | Hotel Creek | Standard  | 1           | 05/07/2019   | 03/07/2019   |
	
#	Scenario Outline: To Verify Selected Options Are Correct
#	When user Select location in search hotel page
#	And 