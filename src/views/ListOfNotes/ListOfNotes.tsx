import React from 'react';
import styled from 'styled-components';
import { List, ListItem } from '@mui/material';

import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../redux/slices/notesSlice';

interface ListOfNotesProps {}

export default function ListOfNotes({}: ListOfNotesProps): JSX.Element {
    const notes = useAppSelector(selectData);

    return (
        <List>
            {notes?.map(({ id, title }) => (
                <ListItem key={id}>{title}</ListItem>
            ))}
        </List>
    );
}
