import { ActionReducer, Action } from '@ngrx/store';
import ATYPES from 'src/app/store/actionTypes';
import * as uuid from 'uuid/v4';
import { NoteItem } from 'src/app/service/note-item';
import { NotesState, notesInitState } from './models';
import { NotesActionsType, ActionNoteAdd } from './actions';

const itemsReducer = function (state: NoteItem[], action: NotesActionsType): NoteItem[] {
    switch (action.type) {
        case ATYPES.ADD_NOTE:

            const result = [
                ...state,
                {
                    ...((<ActionNoteAdd>action).item),
                    id: uuid()
                }
            ];

            return [
                ...state,
                { ...(<ActionNoteAdd>action).item, id: uuid() }
            ];

        case ATYPES.UPD_NOTE:
            return state;

        case ATYPES.CHK_NOTE:
            const updItem = (<ActionNoteAdd>action).item;
            return state.map(item => {
                if (item.id === updItem.id) {
                    return {
                        ...item,
                        checked: !item.checked
                    };
                }
                return item;
            });

        case ATYPES.DEL_NOTE:
            const delItem = (<ActionNoteAdd>action).item;

            return state.reduce((res: any, item) => {
                if (item.id !== delItem.id) {
                    res.push(item);
                }
                return res;
            }, []);

        default:
            return state;
    }
};

const filterReducer = function (filter, action) {
    switch (action.type) {
        case ATYPES.SET_FILTER:
            return {
                phrase: action.params.phrase
            };
        default:
            return filter;
    }
};

// tslint:disable-next-line:max-line-length
export const notesReducers: ActionReducer<NotesState, NotesActionsType > = function (state = notesInitState, action) {

    switch (action.type) {
        case (ATYPES.ADD_NOTE):
        case (ATYPES.UPD_NOTE):
        case (ATYPES.CHK_NOTE):
        case (ATYPES.DEL_NOTE):
            return { ...state, items: itemsReducer(state.items, action) };
        case (ATYPES.SET_FILTER):
            return { ...state, filter: filterReducer(state.filter, action) };
        default:
            return state;
    }

};




