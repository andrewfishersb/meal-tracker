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







## Setup/Installation Requirements

* _Git clone https://github.com/andrewfishersb/meal-tracker_
* _Navgiate into the folder by typing 'cd meal-tracker' in the terminal_
* _type npm install in the terminal_
* _type bower install in the terminal_
* _type gulp build in the terminal_
* _type gulp serve in the terminal_

## Known Bugs

__

## Technologies Used

* _JavaScript_
* _TypeScript_
* _Angular 2_
* _Node_
* _Bower_
* _HTML_
* _CSS_

### License

*GPL*

Copyright (c) 2016 **_Andrew Fisher_**



## Prompt

I want to log a food I have eaten by submitting a form with food name, calories and details.
I want to view a list of foods I have logged.
I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were 100 calories instead of 365).

Further Exploration

Display of the total number of calories consumed in a day, and/or the average number of calories consumed in a day.
Add a property that records when each food was eaten. The user could enter a date and time, or the app can generate a timestamp.
Expand the application to display multiple days of food logs. Group the food entries by day. Then include a component to display the total calories for whichever day the user selects.
Add a new master component to average the total calories consumed per day so that the user can figure out how much exercise they should be getting on a regular basis.

What's Next?
--refractor type of meal to be the days of the week or to use any date
--add time stamp
