import { combineReducers, createStore } from 'redux';
import * as uuid from 'uuid/v4';
import { NoteItem } from 'src/app/service/note-item';
import ATYPES from './actionTypes';

function frontend(state = { isFetching: false, didInvalidate: false }, action) {

    switch (action.type) {
        case ATYPES.POST_NOTE:
            return {
                ...state,
                isFetching: true
            };

        case ATYPES.POSTED_NOTE:
            return {
                ...state,
                isFetching: false
            };

        case ATYPES.REQUEST_NOTES:
            return {
                ...state,
                isFetching: true
            };

        case ATYPES.RECEIVE_NOTES:
            return {
                ...state,
                isFetching: false
            };

        default:
            return state;
    }

}

function filter(state = '', action) {

    switch (action.type) {
        case ATYPES.SET_FILTER:
            return {
                phrase: action.phrase
            };
        default:
            return state;
    }
}

function notes(state: Array<NoteItem> = [], action): Array<NoteItem> {
    switch (action.type) {
        case ATYPES.PLACE_NOTES:
            return action.notes;

        case ATYPES.ADD_NOTE:
            return [
                ...state,
                {
                    id: uuid(),
                    title: action.title,
                    text: action.text
                }
            ];
        case ATYPES.DEL_NOTE:
            return state.reduce((res: any, item) => {
                if (item.id !== action.id) {
                    res.push(item);
                }
                return res;
            }, []);

        case ATYPES.CHK_NOTE:
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        checked: !item.checked
                    };
                }
                return item;
            });

        default:
            return state;
    }
}

const reducer = combineReducers({ frontend, notes, filter });
/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;




