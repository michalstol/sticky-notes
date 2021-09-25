import React, { useEffect } from 'react';

import useAuth from '../../hooks/useAuth';
import { useAppDispatch } from '../../app/hooks';
import fetchNotesAsync from '../../redux/actions/fetchNotesAsync';

import ListOfNotes from '../../components/ListOfNotes/ListOfNotes';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import AddButton from '../../components/AddButton/AddButton';

interface DashboardProps {}

export const testId = 'dashboard';

export default function Dashboard({}: DashboardProps): JSX.Element {
    const dispatch = useAppDispatch();
    const {
        user: { uid, photoURL, displayName },
    } = useAuth(true);

    useEffect(() => {
        dispatch(fetchNotesAsync({ uid }));
    }, [uid, dispatch]);

    return (
        <>
            <DashboardHeader photo={photoURL || ''} name={displayName || ''} />
            <ListOfNotes />
            <AddButton />
        </>
    );
}
