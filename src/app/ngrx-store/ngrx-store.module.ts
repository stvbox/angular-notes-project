import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { notesReducers } from './reducers';

@NgModule({
  imports: [
    CommonModule, StoreModule.forRoot({}), StoreModule.forFeature('todos', notesReducers)
  ],
  declarations: []
})
export class NgrxStoreModule { }
