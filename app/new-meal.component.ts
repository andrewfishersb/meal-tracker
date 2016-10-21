import {Component,Output,EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  template:
  `
  <label>Food</label>
  <input >
  <label>Details</label>
  <input >
  <label>Calories</label>
  <input >
  <button class="btn btn-success">Submit</button>

  `
})

export class NewMealComponent{
  @Output() createChildMeal = new EventEmitter();
  submitNewMeal(){
    
  }
}
