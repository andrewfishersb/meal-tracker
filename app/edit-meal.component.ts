import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  template:
  `
  <div *ngIf='childEditMeal'>
    <label>Meal</label>
    <input class="form-control edit" [(ngModel)]="childEditMeal.food">
    <label>Details</label>
    <input class="form-control edit" [(ngModel)]="childEditMeal.details">
    <label>Calories</label>
    <input class="form-control edit" type="number" [(ngModel)]="childEditMeal.calories">
    <label>Type of Meal</label>
    <select class="form-control edit" [(ngModel)]="childEditMeal.mealType">
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
    </select>
    <button class="btn btn-success" (click)="editComplete()">Done</button>
  </div>
  `
})

export class EditMealComponent{
  @Input() childEditMeal: Meal;
  @Output() clickSender = new EventEmitter();
  editComplete(){
    this.clickSender.emit();
  }

}
