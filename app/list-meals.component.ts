import {Meal} from "./meal.model";
import {Component, Input} from "@angular/core";

@Component({
  selector: 'list-meals',
  template:
  `
    <h1>Meals Consumed</h1>
    <div *ngFor="let currentMeal of childMeals">
      <li>{{currentMeal.food}}</li>
      <li>{{currentMeal.details}}</li>
      <li>{{currentMeal.calories}}</li>
      <h5>-----------------------------</h5>
    </div>

  `
})

export class ListMealComponent{
  @Input() childMeals: Meal[];
}
