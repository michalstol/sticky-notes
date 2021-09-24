import { Timestamp } from 'firebase/firestore';

export default function convertTimestamp(timestamp: Timestamp): number {
    return timestamp.seconds * 1000;
}
