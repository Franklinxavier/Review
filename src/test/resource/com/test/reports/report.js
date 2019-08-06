$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HotelAdactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Adactin End To End Test Case",
  "description": "",
  "id": "hotel-adactin-end-to-end-test-case",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "To Verify Whether The Check-Out Date Field Accepts a Later Date Than Checkin Date.",
  "description": "",
  "id": "hotel-adactin-end-to-end-test-case;to-verify-whether-the-check-out-date-field-accepts-a-later-date-than-checkin-date.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RunThisDude"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user select the location\u0027\u003clocation\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user select the hotel \u0027\u003chotel\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select room type \u0027\u003croom type\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select no-of-rooms \u0027\u003cno-of-rooms\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters check in date \u0027\u003ccheckIn Date\u003e\u0027 later than check out date",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters check out data \u0027\u003ccheckOutDate\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on the search button in search hotel page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user verifies checkindate should not be later than checkoutdate",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "hotel-adactin-end-to-end-test-case;to-verify-whether-the-check-out-date-field-accepts-a-later-date-than-checkin-date.;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "room type",
        "no-of-rooms",
        "checkIn Date",
        "checkOutDate"
      ],
      "line": 21,
      "id": "hotel-adactin-end-to-end-test-case;to-verify-whether-the-check-out-date-field-accepts-a-later-date-than-checkin-date.;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "07/07/2019",
        "05/07/2019"
      ],
      "line": 22,
      "id": "hotel-adactin-end-to-end-test-case;to-verify-whether-the-check-out-date-field-accepts-a-later-date-than-checkin-date.;;2"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "05/07/2019",
        "03/07/2019"
      ],
      "line": 23,
      "id": "hotel-adactin-end-to-end-test-case;to-verify-whether-the-check-out-date-field-accepts-a-later-date-than-checkin-date.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "Book Rooms In Hotel Adactin",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters the \u0027iamtheuser\u0027 in login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \u0027V9WLK9\u0027 in login page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the login the button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_already_in_login_page()"
});
formatter.result({
  "duration": 923482700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iamtheuser",
      "offset": 17
    }
  ],
  "location": "StepDef.user_enters_the_myemailid_gmail_com_in_login_page(String)"
});
formatter.result({
  "duration": 278725200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "V9WLK9",
      "offset": 13
    }
  ],
  "location": "StepDef.user_enters_apdina_in_login_page(String)"
});
formatter.result({
  "duration": 166363100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_login_the_button()"
});
formatter.result({
  "duration": 992912000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To Verify Whether The Check-Out Date Field Accepts a Later Date Than Checkin Date.",
  "description": "",
  "id": "hotel-adactin-end-to-end-test-case;to-verify-whether-the-check-out-date-field-accepts-a-later-date-than-checkin-date.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RunThisDude"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user select the location\u0027Sydney\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user select the hotel \u0027Hotel Creek\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select room type \u0027Standard\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select no-of-rooms \u00271\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters check in date \u002707/07/2019\u0027 later than check out date",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters check out data \u002705/07/2019\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on the search button in search hotel page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user verifies checkindate should not be later than checkoutdate",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 25
    }
  ],
  "location": "StepDef.user_select_the_location_Sydney(String)"
});
formatter.result({
  "duration": 188134100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 23
    }
  ],
  "location": "StepDef.user_select_the_hotel_Hotel_Creek(String)"
});
formatter.result({
  "duration": 137070500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 23
    }
  ],
  "location": "StepDef.user_select_room_type_Standard(String)"
});
formatter.result({
  "duration": 119408000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "StepDef.user_Select_no_of_rooms(String)"
});
formatter.result({
  "duration": 93009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 27
    }
  ],
  "location": "StepDef.user_enters_check_in_date_later_than_check_out_date(String)"
});
formatter.result({
  "duration": 207857200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/07/2019",
      "offset": 28
    }
  ],
  "location": "StepDef.user_enters_check_out_data(String)"
});
formatter.result({
  "duration": 186203000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_click_on_the_search_button_in_search_hotel_page()"
});
formatter.result({
  "duration": 96542600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_verifies_checkindate_should_not_be_later_than_checkoutdate()"
});
formatter.result({
  "duration": 34331300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Book Rooms In Hotel Adactin",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters the \u0027iamtheuser\u0027 in login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \u0027V9WLK9\u0027 in login page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the login the button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_already_in_login_page()"
});
formatter.result({
  "duration": 172411300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iamtheuser",
      "offset": 17
    }
  ],
  "location": "StepDef.user_enters_the_myemailid_gmail_com_in_login_page(String)"
});
formatter.result({
  "duration": 243761900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "V9WLK9",
      "offset": 13
    }
  ],
  "location": "StepDef.user_enters_apdina_in_login_page(String)"
});
formatter.result({
  "duration": 225971900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_login_the_button()"
});
formatter.result({
  "duration": 466518600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To Verify Whether The Check-Out Date Field Accepts a Later Date Than Checkin Date.",
  "description": "",
  "id": "hotel-adactin-end-to-end-test-case;to-verify-whether-the-check-out-date-field-accepts-a-later-date-than-checkin-date.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RunThisDude"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user select the location\u0027Sydney\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user select the hotel \u0027Hotel Creek\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select room type \u0027Standard\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select no-of-rooms \u00271\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters check in date \u002705/07/2019\u0027 later than check out date",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters check out data \u002703/07/2019\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on the search button in search hotel page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user verifies checkindate should not be later than checkoutdate",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 25
    }
  ],
  "location": "StepDef.user_select_the_location_Sydney(String)"
});
formatter.result({
  "duration": 190643900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 23
    }
  ],
  "location": "StepDef.user_select_the_hotel_Hotel_Creek(String)"
});
formatter.result({
  "duration": 211668000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 23
    }
  ],
  "location": "StepDef.user_select_room_type_Standard(String)"
});
formatter.result({
  "duration": 225149800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "StepDef.user_Select_no_of_rooms(String)"
});
formatter.result({
  "duration": 162296000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/07/2019",
      "offset": 27
    }
  ],
  "location": "StepDef.user_enters_check_in_date_later_than_check_out_date(String)"
});
formatter.result({
  "duration": 293558300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/07/2019",
      "offset": 28
    }
  ],
  "location": "StepDef.user_enters_check_out_data(String)"
});
formatter.result({
  "duration": 271690600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_click_on_the_search_button_in_search_hotel_page()"
});
formatter.result({
  "duration": 176834600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_verifies_checkindate_should_not_be_later_than_checkoutdate()"
});
formatter.result({
  "duration": 49533200,
  "status": "passed"
});
});