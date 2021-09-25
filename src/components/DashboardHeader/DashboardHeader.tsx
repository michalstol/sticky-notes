import React, { useState } from 'react';
import { signOut } from '@firebase/auth';
import styled from 'styled-components';
import {
    AppBar,
    Avatar,
    IconButton,
    InputBase,
    Slide,
    Toolbar,
    Menu,
    useScrollTrigger,
    MenuItem,
    ListItemIcon,
} from '@mui/material';
import {
    MenuSharp as IconMenu,
    LogoutSharp as IconExit,
} from '@mui/icons-material';

import { auth } from '../../app/firebase';
import { useAppDispatch } from '../../app/hooks';
import { cleanData } from '../../redux/slices/notesSlice';

interface ScrollHeaderProps {
    children: React.ReactElement;
}

function ScrollHeader({ children }: ScrollHeaderProps): JSX.Element {
    const trigger = useScrollTrigger({
        threshold: 300,
    });

    return (
        <Slide in={!trigger} appear={false} direction="down">
            {children}
        </Slide>
    );
}

interface DashboardHeaderProps {
    name: string;
    photo: string;
}

export const testId = 'dashboard-header';

export default function DashboardHeader({
    photo,
    name,
}: DashboardHeaderProps): JSX.Element {
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);

    const openMenu = ({ currentTarget }: React.SyntheticEvent): void => {
        setAnchorEl(currentTarget);
    };
    const closeMenu = (): void => {
        setAnchorEl(null);
    };
    const loggedOut = (): void => {
        signOut(auth).then(() => {
            dispatch(cleanData());
        });
    };

    return (
        <>
            <ScrollHeader>
                <AppBar elevation={0} position="fixed" data-testid={testId}>
                    <Toolbar>
                        <IconButton size="small" color="inherit">
                            <IconMenu />
                        </IconButton>

                        <SearchInput placeholder="Search in notes" fullWidth />

                        <IconButton
                            size="small"
                            color="inherit"
                            onClick={openMenu}
                        >
                            <Avatar
                                alt={name || ''}
                                src={photo || ''}
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                    fontSize: '0.9em',
                                }}
                            />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ScrollHeader>

            <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={closeMenu}
                onClick={closeMenu}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={loggedOut}>
                    <ListItemIcon>
                        <IconExit fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>

            {/* Create empty space */}
            <Toolbar />
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
