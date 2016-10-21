import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import {ListMealComponent} from './list-meals.component';
import {EditMealComponent} from './edit-meal.component';
import {NewMealComponent} from './new-meal.component';
import {CaloriesPipe} from './calories.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ListMealComponent,
    EditMealComponent,
    NewMealComponent,
    CaloriesPipe
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
