import {Meal} from "./meal.model";
import {Component, Input} from "@angular/core";

@Component({
  selector: 'list-meals',
  template: `
  <h1>Meals Consumed</h1>
  <div *ngFor="currentMeal of allMeals">



  </div>



  `
})

export class ListMealComponent{
  @Input childMeals: Meal[];
}
