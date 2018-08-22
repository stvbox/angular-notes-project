import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private ds: DataStoreService) { }

  ngOnInit() { }

  checkNote(noteId: string): void {
    const note = this.ds.getNote(noteId);

    this.ds.updateNote({
      ...note,
      checked: !note.checked
    });
  }

  removeNote(noteId: string): void {
    this.ds.removeNote(noteId);
  }

  getNotesList() {
    return this.ds.getNotes();
  }

}
