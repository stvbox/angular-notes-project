import { Injectable } from '@angular/core';
import { NoteItem } from 'src/app/service/note-item';
import { DataStoreService } from 'src/app/service/data-store.service';
import { Store, createSelector, select } from '@ngrx/store';
import { NotesState } from './models';
import { ActionNoteAdd, ActionNoteUpd, ActionNoteDel, ActionNoteChk, ActionFilerSet } from './actions';
import { selectGetNotes, selectGetNotesFilter } from './selectors';
import { Subscribable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgrxStoreServiceService {

  constructor(private store: Store<NotesState>) { }

  createNote(note: NoteItem): boolean {
    this.store.dispatch(new ActionNoteAdd(note));
    return true;
  }
  updateNote(note: NoteItem): void {
    this.store.dispatch(new ActionNoteUpd(note));
  }
  markNote(note: NoteItem): void {

    console.log(note);

    this.store.dispatch(new ActionNoteChk(note));
  }
  removeNote(note: NoteItem): void {
    this.store.dispatch(new ActionNoteDel(note));
  }

  getNote(noteId: string): NoteItem {
    return null;
  }

  getNotes(): Subscribable<NoteItem[]> {
    return this.store.pipe(select(selectGetNotes));
  }
  setFilter(params: {}): void {
    this.store.dispatch(new ActionFilerSet(params));
  }
  subscribe(lestener: any): any {
    // throw new Error("Method not implemented.");
  }
}
