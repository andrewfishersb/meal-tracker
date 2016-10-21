import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';


@Component({
  selector: 'calculate-calories',
  template:
  `
  <h4>Total Calories Consumed: {{calculator("total")}}</h4>
  <h4>Average Calories: {{calculator("average")}}</h4>
  `
})

export class CalorieCalculatorComponent{
  @Input() childMealToCalculate: Meal[];
  public total:number;
  calculator(type:string){
    this.total=0;
    var mealArray = this.childMealToCalculate;
    for(var i=0;i<mealArray.length;i++){
      this.total+=mealArray[i].calories;
    }
    if(type==="average"){
      return Math.floor(this.total/mealArray.length);
    }else{
      return this.total;
    }
  }
}
