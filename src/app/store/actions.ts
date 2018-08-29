import { Store } from 'redux';
import ATYPES from './actionTypes';
import * as uuid from 'uuid/v4';

function requestNotes() {
    return { type: ATYPES.REQUEST_NOTES };
}

function recieveNotes(items) {
    return { type: ATYPES.RECEIVE_NOTES };
}

function sendNote() {
    return { type: ATYPES.POST_NOTE };
}

function postedNote(id) {
    return { type: ATYPES.POSTED_NOTE, id };
}

export function fetchNotes(store: Store) {
    store.dispatch(requestNotes());

    return fetch('/api/notes').then(
        response => { // Достаточно получения любого ответа
            return store.getState().notes;
            // return response.json(); // API не существует
        },
        error => console.log('Ошибка при получении списка', error)
    )
    .then(resultJson => {
        store.dispatch(recieveNotes(resultJson));
        store.dispatch({type: ATYPES.PLACE_NOTES, notes: resultJson});
    });
}

export function postNote(store: Store, note) {
    store.dispatch(sendNote());

    return fetch('/api/notes/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(
        response => uuid(), // api возвращает идентификатор заметки
        error => console.log('Ошибка при получении списка', error)
    ).then(result => {
        store.dispatch(postedNote(result));
    });
}

// Копия предыдущей функции - в будущем должны измениться
export function updateNote(store: Store, note) {
    store.dispatch(sendNote());

    return fetch('/api/notes/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(
        response => uuid(), // api возвращает идентификатор заметки
        error => console.log('Ошибка при получении списка', error)
    ).then(result => {
        store.dispatch(postedNote(result));
    });
}