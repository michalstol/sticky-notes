import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '../../app/firebase';

import Note from '../../types/note';

import transformNoteDate from '../../helpers/transformNoteDate';

interface AddNoteAsyncProps {
    uid: string;
    note: Note;
}

const addNoteAsync = createAsyncThunk(
    'notes/create',
    async ({ uid, note }: AddNoteAsyncProps) => {
        const transform = transformNoteDate(note);
        const response = await addDoc(
            collection(db, `users/${uid}/notes`),
            note
        );

        return {
            id: response.id,
            ...note,
            ...transform('createdAt'),
            ...transform('updatedAt'),
            ...transform('deadline'),
        };
    }
);

export default addNoteAsync;
