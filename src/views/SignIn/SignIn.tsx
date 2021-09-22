import React from 'react';
import styled from 'styled-components';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Paper, Button, Grid, Avatar, Skeleton } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

import { auth } from '../../app/firebase';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { selectUser } from '../../reduxSlices/authorizedSlice';

export const testId = 'view--sign-in';

export interface SignInProps {}

const providers = {
    google: new GoogleAuthProvider(),
};

export default function SignIn({}: SignInProps): JSX.Element {
    const user = useAppSelector(selectUser);
    const signIn = async () => {
        signInWithPopup(auth, providers.google);
    };

    return (
        <Paper elevation={0} component="main" data-testid={testId}>
            <Container
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowSpacing={3}
            >
                <Grid item xs={12}>
                    <UserAvatar>
                        {!!user && !!user.photoURL && (
                            <Avatar
                                alt={user.displayName || ''}
                                src={user.photoURL}
                            />
                        )}
                        {!user && (
                            <Skeleton
                                variant="circular"
                                width={96}
                                height={96}
                            />
                        )}
                    </UserAvatar>
                </Grid>

                <Grid item xs={12}>
                    <Button
                        color="primary"
                        variant="contained"
                        // disableElevation
                        onClick={signIn}
                    >
                        <GoogleIcon fontSize="small" sx={{ mr: 1 }} />
                        Sign in with Google
                    </Button>
                </Grid>
            </Container>
        </Paper>
    );
}

const Container = styled(Grid)`
    min-height: 100vh;
`;

const UserAvatar = styled.figure`
    width: 96px;
    height: 96px;
    margin: 0;

    img,
    .MuiAvatar-root {
        width: 100%;
        height: 100%;
    }
`;
