import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { db } from '../../app/firebase';

import Note, { Status, NoteRedux } from '../../types/note';

import transformNoteDate from '../../helpers/transformNoteDate';

interface FetchAsyncProps {
    uid: string;
    filterBy?: Status;
}

const fetchNotesAsync = createAsyncThunk(
    'notes/fetch',
    async ({ uid, filterBy = 'active' }: FetchAsyncProps) => {
        const data: NoteRedux[] = [];
        const snapshot = await getDocs(
            query(
                collection(db, `users/${uid}/notes`),
                where('status', '==', filterBy)
            )
        );

        if (snapshot.empty) return [];

        snapshot.forEach((doc): void => {
            const docData = doc.data() as Note;
            const transform = transformNoteDate(docData);

            data.push({
                id: doc.id,
                ...docData,
                ...transform('createdAt'),
                ...transform('updatedAt'),
                ...transform('deadline'),
            });
        });

        return data;
    }
);

export default fetchNotesAsync;
