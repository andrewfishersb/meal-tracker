import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  template:
  `
    <label>Meal</label>
    <input [(ngModel)]="clickMeal.food">
    <label>Details</label>
    <input [(ngModel)]="clickMeal.details">
    <label>Calories</label>
    <input type="number" [(ngModel)]="clickMeal.calories">

  `
})

export class EditMealComponent{
  @Input() childMeal: Meal;
  @Output() clickSender = new EventEmitter();
  editComplete(){
    this.clickSender.emit();
  }

}
