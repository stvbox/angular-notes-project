import { Injectable } from '@angular/core';
import { Store, Unsubscribe } from 'redux';
import { DataStoreService } from '../../service/data-store.service';
import { NoteItem } from 'src/app/service/note-item';
import { postNote, fetchNotes, updateNote } from '../actions';
import ATYPES from '../actionTypes';
import store from '../store';

@Injectable({
  providedIn: 'root'
})
// методы сервиса впринципе думаю можно расценивать как "actionCreator"
export class ReduxDataStoreService implements DataStoreService {
  store: Store;

  constructor() {
    this.store = store;
    fetchNotes(this.store); // Загрузка заметок с сервера
  }

  subscribe(fn): Unsubscribe {
    return store.subscribe(fn);
  }

  createNote(note: NoteItem): boolean {
    postNote(this.store, note).then(id => {
      store.dispatch({type: ATYPES.ADD_NOTE, ...note, id});
      fetchNotes(this.store);
    });

    return true;
  }

  updateNote(note: NoteItem): void {
    updateNote(this.store, note).then( id => {
      store.dispatch({type: ATYPES.UPD_NOTE, ...note, id});
      fetchNotes(this.store);
    });

  }

  markNote(noteId: string): void {
    this.store.dispatch({type: ATYPES.CHK_NOTE, id: noteId});
    this.updateNote(this.getNote(noteId));
  }

  removeNote(noteId: string): void {
    this.store.dispatch({type: ATYPES.DEL_NOTE, id: noteId});
  }

  getNote(noteId: string): NoteItem {
    return this.store.getState().notes.find(item => item.id === noteId);
  }

  getNotes(): NoteItem[] {
    const data = this.store.getState();

    if (!data.filter) { return data.notes; }

    let result = [...data.notes];

    if (data.filter.phrase) {
      result = result.filter(item => {
        const phrase = String(data.filter.phrase).toLocaleUpperCase();
        const inTitle = (String(item.title).toLocaleUpperCase().indexOf(phrase) > -1) ? true : false;
        const inText = (String(item.text).toLocaleUpperCase().indexOf(phrase) > -1) ? true : false;
        if (inTitle || inText) { return true; }
      });
    }

    return result;

  }

  setFilter(params: any): void {
    this.store.dispatch({type: ATYPES.SET_FILTER, ...params});
  }

}
