# _Meal Tracker_

#### By **Andrew Fisher**

## Description

_Meal Tracker is a site that logs meals and calories. Entries are editable, and meals viewed can be filtered._



![ScreenShot](https://cloud.githubusercontent.com/assets/17396138/25399385/1d7c9678-29a4-11e7-87f4-adb90712f290.png)

## User Stories

* As a user, I want to be able to track the food I have consumed, alongside it calories, meal type and any other notes.
* As a user, I want to be able to view all the calories I have consumed.
* As a user, I want to be able to filter meals by high calorie content (over 500) or low calorie content (under 500).
* As a user, I want to be able to filter meals by meal type.
* As a user, I want to be able to edit a meal.
* As a user, I want to be able to delete a meal.


## Setup/Installation Requirements

* _Git clone https://github.com/andrewfishersb/meal-tracker_
* _Navgiate into the folder by typing 'cd meal-tracker' in the terminal_
* _type npm install in the terminal_
* _type bower install in the terminal_
* _type gulp build in the terminal_
* _type gulp serve in the terminal_


## Technologies Used

* _JavaScript_
* _Angular 2_
* _TypeScript_
* _Node_
* _Bower_
* _HTML_
* _CSS_

## Known Bugs
* _If no meals listed, average is listed as NaN_
 * _solve by checking for the size of meal array and if 0 set average to 0_
* _If one meal doesn't have calories listed then the total and average become NaN_
 * _in calorie-calculator.component check if calorie is NaN if dont add it and subtract 1 from division_
  * _in list-meals.component check if calorie is NaN and print Not Available_


### License

*GPL*

Copyright (c) 2016 **_Andrew Fisher_**
