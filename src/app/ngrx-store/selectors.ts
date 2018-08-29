import { NotesState, FeatureNotesState } from './models';
import { createSelector, Selector } from '@ngrx/store';
import { NoteItem } from 'src/app/service/note-item';
import { MemoizedSelectorWithProps } from '@ngrx/store/src/selector';

const selectNotesAllItems: Selector<FeatureNotesState, NoteItem[]> = (state: FeatureNotesState ) => {
    return [ ...state.todos.items ];
};

const selectStateFilter: Selector<FeatureNotesState, {}> = function(state: FeatureNotesState) {
    return { ... state.todos.filter};
};
export const selectGetNotesFilter = createSelector(selectStateFilter);

export const selectGetNotes: MemoizedSelectorWithProps<any, any, any> = createSelector(selectNotesAllItems, selectStateFilter,
    (items, filter, param: {}) => {
        if (!filter.phrase) { return [ ...items ]; }

        return items.filter(item => {
            const phrase = String(filter.phrase).toLocaleUpperCase();
            const inTitle = (String(item.title).toLocaleUpperCase().indexOf(phrase) > -1) ? true : false;
            const inText = (String(item.text).toLocaleUpperCase().indexOf(phrase) > -1) ? true : false;
            if (inTitle || inText) { return true; }
        });
});
