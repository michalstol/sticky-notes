import firestore from 'firebase/firestore';

export type Status = 'draft' | 'active' | 'suspended' | 'done' | 'deleted';
export type Priority =
    | 'lowest'
    | 'low'
    | 'normal'
    | 'high'
    | 'urgent'
    | 'immediately';

export default interface Note {
    status: Status;
    priority: Priority;
    title: string;
    description?: string;
    attached?: [string]; // link, image, doc, sound, movie
    createdBy: string;
    createdAt: firestore.Timestamp | firestore.FieldValue | number;
    updatedAt?: firestore.Timestamp | firestore.FieldValue | number;
    deadline?: firestore.Timestamp | firestore.FieldValue | number;
    shared?: string; // UUID public note. Only owner can update origin note. After that, copied note will be updated.
}

export interface NoteRedux extends Note {
    id: string;
}

export const priorities: Priority[] = [
    'lowest',
    'low',
    'normal',
    'high',
    'urgent',
    'immediately',
];
export function getPriority(sliderValue: number): Priority {
    return priorities[sliderValue];
}
