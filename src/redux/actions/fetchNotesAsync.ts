import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { db } from '../../app/firebase';

import Note, { Status, NoteRedux } from '../../types/note';

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

            data.push({
                id: doc.id,
                ...docData,
            });
        });

        return data;
    }
);

export default fetchNotesAsync;
