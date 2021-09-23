import firestore from 'firebase/firestore';

export type Status = 'draft' | 'active' | 'suspended' | 'done' | 'deleted';
export type Priority =
    | 'lowest'
    | 'low'
    | 'normal'
    | 'high'
    | 'urgent'
    | 'immediately';

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

export default interface Note {
    status: Status;
    priority: Priority;
    title: string;
    description: string;
    attached?: [string]; // link, image, doc, sound, movie
    createdBy: string;
    createdAt: firestore.Timestamp | firestore.FieldValue;
    updatedAt?: firestore.Timestamp | firestore.FieldValue;
    deadline?: firestore.Timestamp | firestore.FieldValue;
    shared?: string; // UUID public note. Only owner can update origin note. After that, copied note will be updated.
}
