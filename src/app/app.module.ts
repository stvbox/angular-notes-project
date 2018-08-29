import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesToolbarComponent } from './notes-toolbar/notes-toolbar.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NgrxStoreModule } from './ngrx-store/ngrx-store.module';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesToolbarComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, NgrxStoreModule
  ],
  providers: [
    /*{ provide: DataStoreService, useClass: ReduxDataStoreService }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
