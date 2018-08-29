import { Component, OnInit, OnDestroy } from '@angular/core';
import { Unsubscribe } from 'redux';
import { DataStoreService } from '../service/data-store.service';
import { NgrxStoreServiceService } from 'src/app/ngrx-store/ngrx-store-service.service';
import { NoteItem } from '../service/note-item';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnDestroy {
  unsubscribe: Unsubscribe;
  notes: NoteItem[] = [];

  constructor(private ds: NgrxStoreServiceService) {
    this.ds.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  ngOnInit() {
    /*this.unsubscribe = this.ds.subscribe(() => {
      this.notes = this.ds.getNotes();
    });*/
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  checkNote(note: NoteItem): void {
    this.ds.markNote(note);
  }

  removeNote(note: NoteItem): void {
    this.ds.removeNote(note);
  }

  getNotesList() {
    return this.ds.getNotes();
  }

}
