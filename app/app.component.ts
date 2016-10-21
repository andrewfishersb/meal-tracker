import { Component } from '@angular/core';
import {Meal} from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <calculate-calories [childMealToCalculate]="allMeals"></calculate-calories>
    <list-meals [childListMeals]='allMeals' (editButtonClicked)="clickedEditSetMeal($event)"></list-meals>
    <new-meal (createChildMeal)="addNewMeal($event)"></new-meal>
  </div>
  `
})

export class AppComponent {

  public allMeals:Meal[]=[
    new Meal("Turkey BLT Sandwhich","Didn't get a soda!",354,"Breakfast"),
    new Meal("Fries","I only ate half of them.",365,"Lunch"),
    new Meal("Banana","not quite ripe",105,"Breakfast"),
    new Meal("Heart Attack Burger","I'm feeling a sting in my right arm",700,"Lunch")
  ]

  addNewMeal(newMeal: Meal){
    this.allMeals.push(newMeal);
  }





}
