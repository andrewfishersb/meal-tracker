import {Meal} from "./meal.model";
import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'list-meals',
  template:
  `
    <div class="row">
      <div class="filter">
        <label>Filter by Calories</label>
        <select class="form-control" (change)="calorieFilter($event.target.value)">
          <option value="all">All</option>
          <option value="under-500">Under 500 Calories</option>
          <option value="over-500">Over 500 Calories</option>
        </select>
      </div>
      <div class="filter">
        <label>Filter by Meal Type</label>
        <select class="form-control" (change)="mealTypeFilter($event.target.value)">
          <option value="all">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>
    </div>
    <div class="meals" *ngFor="let currentMeal of childListMeals|calories:filteredCalorie|mealTime:filteredMealType">
      <h3>{{currentMeal.food}}</h3>
      <h5>Details: {{currentMeal.details}}</h5>
      <h5>Calories: {{currentMeal.calories}}</h5>
      <h5>Meal Time: {{currentMeal.mealType}}</h5>
      <button class="btn btn-info" (click) = 'clickedEditSetMeal(currentMeal)'>Edit</button>
      <button class="btn btn-danger" (click) = 'deleteMeal(currentMeal)'>Delete</button>
      <div *ngIf="selectedMeal===currentMeal">
        <edit-meal [childEditMeal]='this.selectedMeal' (clickSender)="finishedEditing()"></edit-meal>
      </div>
    </div>

  `
})

export class ListMealComponent{
  @Input() childListMeals: Meal[];
  public filteredCalorie: string = null;
  public filteredMealType: string = null;
  public selectedMeal: Meal =null;

  calorieFilter(desiredOutput: string){
    this.filteredCalorie = desiredOutput;
  }
  mealTypeFilter(desiredOutput: string){
    this.filteredMealType=desiredOutput;
  }

  deleteMeal(toDeleteMeal: Meal){
    this.childListMeals.splice(this.childListMeals.indexOf(toDeleteMeal),1);
  }

  clickedEditSetMeal(lastClickedMeal: Meal){
    this.selectedMeal = lastClickedMeal;
  }

  finishedEditing(){
    this.selectedMeal = null;
  }
}
