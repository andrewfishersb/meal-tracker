import {Meal} from "./meal.model";
import {Component, Input} from "@angular/core";

@Component({
  selector: 'list-meals',
  template:
  `
    <div *ngFor="let currentMeal of childMeals">
      <li>Meal: {{currentMeal.food}}</li>
      <li>Details: {{currentMeal.details}}</li>
      <li>Calories: {{currentMeal.calories}}</li>
      <button class="btn btn-info">Edit</button>
    </div>

  `
})

export class ListMealComponent{
  @Input() childMeals: Meal[];
}
