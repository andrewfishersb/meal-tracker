import {Meal} from "./meal.model";
import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'list-meals',
  template:
  `
    <select class="form-control" (change)="selectedFilter($event.target.value)">
      <option value="all">All</option>
      <option value="under-500">Under 500 Calories</option>
      <option value="over-500">Over 500 Calories</option>
    </select>
    <div *ngFor="let currentMeal of childListMeals|calories:filteredElement">
      <li>Meal: {{currentMeal.food}}</li>
      <li>Details: {{currentMeal.details}}</li>
      <li>Calories: {{currentMeal.calories}}</li>
      <button class="btn btn-info" (click) = 'captureEditedMeal(currentMeal)'>Edit</button>
      <button class="btn btn-danger" (click) = 'deleteMeal(currentMeal)'>Delete</button>
    </div>

  `
})

export class ListMealComponent{
  @Input() childListMeals: Meal[];
  @Output() editButtonClicked = new EventEmitter();
  public filteredElement: string = null;
  captureEditedMeal(chosenMeal:Meal){
    this.editButtonClicked.emit(chosenMeal);
  }

  selectedFilter(desiredOutput: string){
    this.filteredElement = desiredOutput;
  }

  deleteMeal(toDeleteMeal: Meal){
    this.childListMeals.splice(this.childListMeals.indexOf(toDeleteMeal),1);
  }
}
