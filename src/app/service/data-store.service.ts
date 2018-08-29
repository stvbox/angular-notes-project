import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v4';
import { Unsubscribe } from 'redux';
import { NoteItem } from './note-item';

const data = {
  notes: [
    <NoteItem>{
      id: 'asdfasdf-asdfaergsdf-sgdfgrre',
      title: 'Первый заголовок',
      text: 'Содержиммое первой заметки'
    },
    <NoteItem>{
      id: 'sdfasdf-asdssdf-shwegrre',
      title: 'Второй заголовок',
      text: `
      Содержиммое второй заметки. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architec
      to beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut od
      it aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque por
      ro quisquam est dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut od`
    }
  ],
  filter: null
};

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  constructor() { }

  createNote(note: NoteItem): boolean {

    note.id = uuid();
    data.notes = [...data.notes];
    data.notes.push(note);
    return true;
  }

  updateNote(note: NoteItem) {
    data.notes.find( (item, index) => {
      if (item.id === note.id) {
        data.notes[index] = {
          ...item,
          ...note
        };
        return true;
      }
    });

  }

  markNote(noteId: string) {
    const note = this.getNote(noteId);
    this.updateNote({
      ...note,
      checked: !note.checked
    });
  }

  removeNote(noteId: string) {
    console.log('noteId: ' + noteId);
    const index = data.notes.findIndex(item => item.id === noteId);
    if (index > -1) {
      const notes = [...data.notes];
      notes.splice(index, 1);
      data.notes = notes;
    }
  }

  getNote(noteId: string) {
    return data.notes.find(item => item.id === noteId);
  }

  getNotes() {
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

  setFilter(params) {
    data.filter = { ...params };
  }

  subscribe(lestener: any): Unsubscribe { return null; }

}
