import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStoreService } from 'src/app/service/data-store.service';
import { NgrxStoreServiceService } from 'src/app/ngrx-store/ngrx-store-service.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  formModel: FormGroup;

  constructor(private ds: NgrxStoreServiceService) {
    this.formModel = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('')
    });
  }

  ngOnInit() { }

  saveNote() {
    this.ds.createNote(this.formModel.value);
    // this.store.dispatch(new ActionNoteAdd(this.formModel.value));
    /*const result = this.ds.createNote({
      ...this.formModel.value
    });*/

    this.close.emit(true);
  }

  cancelInput() {
    this.close.emit(false);
  }

}
