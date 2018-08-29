import { NoteItem } from 'src/app/service/note-item';

export interface NotesState {
    items: NoteItem[];
    filter: {};
}

export interface FeatureNotesState {
    todos: NotesState;
}

export const notesInitState = {
    items: [],
    filter: {}
};
