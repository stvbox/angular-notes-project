import { Action } from '@ngrx/store';
import { NoteItem } from 'src/app/service/note-item';
import ATYPES from '../store/actionTypes';


class ActionNote {
    constructor(public item: NoteItem) { }
}

export class ActionNoteAdd extends ActionNote implements Action {
    type = ATYPES.ADD_NOTE;
}
export class ActionNoteUpd extends ActionNote implements Action {
    type = ATYPES.UPD_NOTE;
}
export class ActionNoteChk  extends ActionNote implements Action {
    type = ATYPES.CHK_NOTE;
}
export class ActionNoteDel  extends ActionNote implements Action {
    type = ATYPES.DEL_NOTE;
}

export class ActionFilerSet implements Action {
    type = ATYPES.SET_FILTER;
    constructor(public params: {}) { }
}

export type NotesActionsType = ActionNoteAdd | ActionNoteDel | ActionNoteUpd | ActionNoteChk | ActionFilerSet;

