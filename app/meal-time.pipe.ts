import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';


@Pipe({
  name: 'mealTime',
  pure: false
})

export class MealTypePipe implements PipeTransform{
  transform(input:Meal[],desiredType:string){
      var output: Meal[] =[];
      if(desiredType !=='Breakfast' && desiredType !=='Lunch' && desiredType !== 'Dinner'){
        return input;
      }
      for(var i =0;i<input.length;i++){
        if(desiredType===input[i].mealType){
          output.push(input[i]);
        }
      }
      return output;
    }
}
