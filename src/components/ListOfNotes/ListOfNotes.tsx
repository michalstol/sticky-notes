import React from 'react';
import styled from 'styled-components';
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    CircularProgress,
} from '@mui/material';

import { useAppSelector } from '../../app/hooks';
import { selectNotes } from '../../redux/slices/notesSlice';

interface ListOfNotesProps {}

export default function ListOfNotes({}: ListOfNotesProps): JSX.Element {
    const { data, status } = useAppSelector(selectNotes);

    return (
        <>
            {status === 'loading' && (
                <Loader>
                    <CircularProgress />
                </Loader>
            )}
            {status === 'idle' && (
                <List>
                    {data?.map(({ id, title }) => (
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
            )}
        </>
    );
}

const Loader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
