import {Component,Output,EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  template:
  `
  <label>Food</label>
  <input #newMeal>
  <label>Details</label>
  <input #newDetails>
  <label>Calories</label>
  <input type="number" #newCalories>
  <select>
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
  </select>
  <button class="btn btn-primary" (click)="submitNewMeal(newMeal.value, newDetails.value, newCalories.value); newMeal.value=''; newDetails.value=''; newCalories.value=''">Submit</button>

  `
})

export class NewMealComponent{
  @Output() createChildMeal = new EventEmitter();
  submitNewMeal(food:string,details:string,calories:number,mealType:string){
    this.createChildMeal.emit(new Meal(food,details,calories,"Lunch"));
  }
}
