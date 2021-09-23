import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Paper, Button, Grid, Avatar, Skeleton } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

import { auth } from '../../app/firebase';
import useAuth from '../../hooks/useAuth';

export const testId = 'view--sign-in';

const avatarSize = 96;
const providers = {
    google: new GoogleAuthProvider(),
};

export default function SignIn(): JSX.Element {
    const history = useHistory();

    const { logged, user } = useAuth();
    const [pending, setPending] = useState(logged);

    const signIn = async () => {
        setPending(true);

        signInWithPopup(auth, providers.google)
            .then(result => {
                if (!result.user) return undefined;

                setTimeout(() => {
                    history.replace({ pathname: '/dashboard' });
                }, 1000);
            })
            .catch(err => console.warn(err));
    };

    useEffect(() => {
        setPending(logged);
    }, [logged]);

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
                        {logged && !!user?.photoURL && (
                            <Avatar
                                alt={user.displayName || ''}
                                src={user.photoURL}
                            />
                        )}
                        {!logged && (
                            <Skeleton
                                variant="circular"
                                animation="wave"
                                width={avatarSize}
                                height={avatarSize}
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
                        disabled={pending}
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
    width: ${avatarSize}px;
    height: ${avatarSize}px;
    margin: 0;

    img,
    .MuiAvatar-root {
        width: 100%;
        height: 100%;
    }
`;
