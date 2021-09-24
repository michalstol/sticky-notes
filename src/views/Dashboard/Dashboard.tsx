import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';
import styled from 'styled-components';
import {
    Box,
    AppBar,
    Avatar,
    Container,
    IconButton,
    InputBase,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';
import { MenuSharp as IconMenu } from '@mui/icons-material';

import useAuth from '../../hooks/useAuth';
import { useAppDispatch } from '../../app/hooks';

import fetchNotesAsync from '../../redux/actions/fetchNotesAsync';
import addNoteAsync from '../../redux/actions/addNoteAsync';

interface DashboardProps {}
interface HideOnScrollProps {
    children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps): JSX.Element {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export const testId = 'dashboard';

export default function Dashboard({}: DashboardProps): JSX.Element {
    const dispatch = useAppDispatch();
    const {
        user: { uid, photoURL, displayName },
    } = useAuth(true);

    useEffect(() => {
        dispatch(fetchNotesAsync({ uid }));
    }, [uid]);

    return (
        <>
            <HideOnScroll>
                <AppBar elevation={0}>
                    <Toolbar>
                        <IconButton
                            size="small"
                            color="inherit"
                            onClick={() =>
                                dispatch(
                                    addNoteAsync({
                                        uid,
                                        note: {
                                            status: 'active',
                                            priority: 'normal',
                                            title: 'Test title',
                                            createdBy: uid,
                                            createdAt: serverTimestamp(),
                                        },
                                    })
                                )
                            }
                        >
                            <IconMenu />
                        </IconButton>

                        <SearchInput placeholder="Search in notes" fullWidth />

                        <IconButton size="small" color="inherit">
                            <Avatar
                                alt={displayName || ''}
                                src={photoURL || ''}
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                    fontSize: '0.9em',
                                }}
                            />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            <Toolbar />

            <Container></Container>
        </>
    );
}

const SearchInput = styled(InputBase)`
    &.MuiInputBase-root {
        color: inherit;
    }

    input::placeholder {
        opacity: 1;
    }
`;
