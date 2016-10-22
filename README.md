# _Meal Tracker_

#### _Tracks a users meals, October 21st, 2016_

#### By _**Andrew Fisher**_

## Description

_This app lets a person enter meals that they have consumed alongside information pertaining to their food i.e. calories. The user can also filter meals by amount of calories_


## Specs
1. _User can enter type of food they consumed_
  * _Example Input: "Apple"_
  * _Example Output: "Apple"_
2. _User can enter details about food they consumed_
  * _Example Input: "Only ate half"_
  * _Example Output: "Only ate half"_
3. _User can enter amount of calories they consumed_
  * _Example Input: "300"_
  * _Example Output: "300"_
4. _User can view a list of all food they have entered_
  * _Example Output: [(Apple,Only ate half,50),(Fries,delicious,200),(Something Fatty,good but bad ,700)]_
5. _User can edit name of food, details and the amount of calories_
  * _Example Before Edit: Apple, Only ate half, 50_
  * _Example Input: Banana, Ate all, 75_
  * _Example Output: Banana, Ate all, 75_
6. _User can view foods only in a specific range_
  * _Example Meals: [(Apple,Only ate half,50),(Fries,delicious,200),(Something Fatty,good but bad ,700)]_
  * _Example Input: Over 500 Calories_
  * _Example Output: Something Fatty,good but bad ,700_
7. _User can enter a type of meal_
  * _Example Input: Dinner_
  * _Example Output: Dinner_
8. _User can change the type of meal_
  * _Example Data: Dinner_
  * _Example Input: Lunch_
  * _Example Output: Lunch_
9. _User can filter by meal types_
  * _Example Data: [(pancake,yum,580,breakfast),(pizza,1 slice, 220, Lunch),(eggs,over hard,200,breakfast)]_
  * _Example Input: filter for breakfast_
  * _Example Output: [(pancake,yum,580,breakfast),(eggs,over hard,200,breakfast)]_



## Setup/Installation Requirements

* _Git clone https://github.com/andrewfishersb/meal-tracker_
* _Navgiate into the folder by typing 'cd meal-tracker' in the terminal_
* _type npm install in the terminal_
* _type bower install in the terminal_
* _type gulp build in the terminal_
* _type gulp serve in the terminal_


## Technologies Used

* _JavaScript_
* _TypeScript_
* _Angular 2_
* _Node_
* _Bower_
* _HTML_
* _CSS_

## Known Bugs
* _If no meals listed, average is listed as NaN_
* _If one meal doesn't have calories listed then the total and average become NaN_

## Futer Ideas
* _Allow user to enter in a time meal was consumed_
* _Enter in a day of the week instead of meal type_
* _Enter in an actual date instead of meal type_
 * _Be able to filter by date_


### License

*GPL*

Copyright (c) 2016 **_Andrew Fisher_**
