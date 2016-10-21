import { Component } from '@angular/core';
import {Meal} from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
      <calculate-calories [childMealToCalculate]="allMeals"></calculate-calories>
    </div>
    <div class='row'>
      <div class="col-sm-8">
        <list-meals [childListMeals]='allMeals' (editButtonClicked)="clickedEditSetMeal($event)"></list-meals>
      </div>
      <div class="col-sm-4">
        <new-meal (createChildMeal)="addNewMeal($event)"></new-meal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {

  public allMeals:Meal[]=[
    new Meal("Pancakes","Short stack",580,"Breakfast"),
    new Meal("Pizza","Two slices",440,"Lunch"),
    new Meal("Turkey BLT Sandwhich","chose over a cheesesteak",354,"Lunch"),
    new Meal("Spaghetti alle vongole","Had less clams",570,"Dinner")
  ]

  addNewMeal(newMeal: Meal){
    this.allMeals.push(newMeal);
  }
}
