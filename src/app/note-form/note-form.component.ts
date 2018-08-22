import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataStoreService, NoteItem } from '../data-store.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  formModel: FormGroup;

  constructor(private ds: DataStoreService) {
    this.formModel = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('')
    });
  }

  ngOnInit() { }

  saveNote() {
    const result = this.ds.createNote({
      ...this.formModel.value
    });

    this.close.emit(true);
  }

  cancelInput() {
    this.close.emit(false);
  }

}
