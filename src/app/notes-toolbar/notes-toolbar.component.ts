import { Component, OnInit } from '@angular/core';
import { NgrxStoreServiceService } from 'src/app/ngrx-store/ngrx-store-service.service';

@Component({
  selector: 'app-notes-toolbar',
  templateUrl: './notes-toolbar.component.html',
  styleUrls: ['./notes-toolbar.component.css']
})
export class NotesToolbarComponent implements OnInit {
  flShowNoteForm = false;

  constructor( private ds: NgrxStoreServiceService ) { }

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
