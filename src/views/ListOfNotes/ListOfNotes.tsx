import React from 'react';
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
} from '@mui/material';

import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../redux/slices/notesSlice';

interface ListOfNotesProps {}

export default function ListOfNotes({}: ListOfNotesProps): JSX.Element {
    const notes = useAppSelector(selectData);

    return (
        <List>
            {notes?.map(({ id, title }) => (
                <ListItem disablePadding key={id}>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar>{title.charAt(0)}</Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={title} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}
