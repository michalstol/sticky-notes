import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { NoteRedux } from '../../types/note';

import fetchNotesAsync from '../actions/fetchNotesAsync';
import addNoteAsync from '../actions/addNoteAsync';

type Status = 'idle' | 'loading' | 'failed';

interface NotesState {
    status: Status;
    data: NoteRedux[] | null;
}

const initialState: NotesState = {
    data: null,
    status: 'idle',
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // fetchNotesAsync
            .addCase(fetchNotesAsync.pending, state => {
                return { ...state, status: 'loading' };
            })
            .addCase(fetchNotesAsync.fulfilled, (state, action) => {
                return { ...state, status: 'idle', data: [...action.payload] };
            })
            .addCase(fetchNotesAsync.rejected, state => {
                return { ...state, status: 'failed' };
            })
            // addNoteAsync
            .addCase(addNoteAsync.pending, state => {
                return { ...state, status: 'loading' };
            })
            .addCase(addNoteAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    status: 'idle',
                    data: [action.payload, ...(state.data || [])],
                };
            })
            .addCase(addNoteAsync.rejected, state => {
                return { ...state, status: 'failed' };
            });
    },
});

export const selectNotes = (state: RootState) => state.notes;
export const selectStatus = (state: RootState) => state.notes.status;
export const selectData = (state: RootState) => state.notes.data;

export default notesSlice.reducer;
