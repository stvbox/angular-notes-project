import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-notes-toolbar',
  templateUrl: './notes-toolbar.component.html',
  styleUrls: ['./notes-toolbar.component.css']
})
export class NotesToolbarComponent implements OnInit {
  flShowNoteForm = false;

  constructor( private ds: DataStoreService ) { }

  ngOnInit() {
  }

  createNote() {
    this.flShowNoteForm = !this.flShowNoteForm;
  }

  onClose() {
    this.flShowNoteForm = false;
  }

  getAddBtnText(): string {
    return this.flShowNoteForm ? 'отмена' : 'добавить';
  }

  setFilter(filter) {
    this.ds.setFilter(filter);
  }

}
