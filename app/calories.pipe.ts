import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: 'calories',
  pure:false
})

export class CaloriesPipe implements PipeTransform{
  transform(input:Meal[],desiredOutput:string){
    var output: Meal[] = [];
    for(var i = 0;i<input.length;i++){
      if(desiredOutput==='under-500'){
        console.log("fell into under 500");
        if(input[i].calories<500){
          output.push(input[i]);
        }
      }
      else if(desiredOutput==='over-500'){
        if(input[i].calories>=500){
          output.push(input[i]);
        }
      }else{
        return input;
      }
    }
    return output;
  }
}
