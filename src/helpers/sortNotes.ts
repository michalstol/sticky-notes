import { NoteRedux } from '../types/note';

enum Direction {
    'ASC' = 1,
    'DESC' = -1,
}

export default function sortNotes(
    sortBy: keyof NoteRedux = 'createdAt',
    direction: keyof typeof Direction = 'DESC'
): (x: NoteRedux, y: NoteRedux) => number {
    return function (x, y) {
        const xVal = x[sortBy];
        const yVal = y[sortBy];
        const delta = Direction[direction];

        if (!xVal || !yVal) return 0;

        if (typeof xVal === 'number' && typeof yVal === 'number')
            return (xVal - yVal) * delta;
        if (typeof xVal === 'string' && typeof yVal === 'string')
            return xVal.toLowerCase().localeCompare(yVal.toLowerCase()) * delta;

        return 0;
    };
}
