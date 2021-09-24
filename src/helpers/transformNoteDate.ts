import { Timestamp } from 'firebase/firestore';

import Note from '../types/note';
import convertTimestamp from './convertTimestamp';

export default function transformNoteDate(data: Note) {
    return function (key: keyof Note) {
        if (!data.hasOwnProperty(key)) return {};

        return {
            [key]: convertTimestamp(data[key] as Timestamp),
        };
    };
}
