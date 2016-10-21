import { Component } from '@angular/core';
import {Meal} from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <list-meals [childListMeals]='allMeals' (editButtonClicked)="clickedEditSetMeal($event)"></list-meals>
    <new-meal (createChildMeal)="addNewMeal($event)"></new-meal>
  </div>
  `
})

export class AppComponent {

  public allMeals:Meal[]=[
    new Meal("Turkey BLT Sandwhich","Didn't get a soda!",354),
    new Meal("Fries","I only ate half of them.",365),
    new Meal("Banana","not quite ripe",105),
    new Meal("Heart Attack Burger","I'm feeling a sting in my right arm",1505)
  ]

  addNewMeal(newMeal: Meal){
    this.allMeals.push(newMeal);
  }





}
