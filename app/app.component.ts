import { Component } from '@angular/core';
import {Meal} from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <list-meals [childMeals]='allMeals'></list-meals>
    <edit-meal></edit-meal>
  </div>
  `
})

export class AppComponent {
  public allMeals:Meal[]=[
    new Meal("Hamburger","Didn't get a soda or cheese on my burger!",354),
    new Meal("Fries","I only ate half of them.",365),
    new Meal("Banana","not quite ripe",105)
  ]




}
