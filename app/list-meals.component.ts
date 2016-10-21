import {Meal} from "./meal.model";
import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'list-meals',
  template:
  `
    <div *ngFor="let currentMeal of childListMeals">
      <li>Meal: {{currentMeal.food}}</li>
      <li>Details: {{currentMeal.details}}</li>
      <li>Calories: {{currentMeal.calories}}</li>
      <button class="btn btn-info" (click) = 'captureEditedMeal(currentMeal)'>Edit</button>
    </div>

  `
})

export class ListMealComponent{
  @Input() childListMeals: Meal[];
  @Output() editButtonClicked = new EventEmitter();
  captureEditedMeal(chosenMeal:Meal){
    this.editButtonClicked.emit(chosenMeal);
  }
}
