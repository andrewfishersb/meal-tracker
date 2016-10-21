import { Component } from '@angular/core';
import {Meal} from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <list-meals [childListMeals]='allMeals' (editButtonClicked)="clickedEditSetMeal($event)"></list-meals>
    <edit-meal [childEditMeal]='this.selectedMeal' (clickSender)="finishedEditing()"></edit-meal>
    <new-meal></new-meal>
    <button class="btn btn-primary">Add new Meal</button>
  </div>
  `
})

export class AppComponent {

  public selectedMeal: Meal = null;

  public allMeals:Meal[]=[
    new Meal("Hamburger","Didn't get a soda or cheese on my burger!",354),
    new Meal("Fries","I only ate half of them.",365),
    new Meal("Banana","not quite ripe",105)
  ]

  clickedEditSetMeal(lastClickedMeal: Meal){
    this.selectedMeal = lastClickedMeal;
  }

  finishedEditing(){
    this.selectedMeal = null;
  }

}
