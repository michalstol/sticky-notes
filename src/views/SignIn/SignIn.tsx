import React from 'react';
import styled from 'styled-components';
import {} from 'firebase/auth';
import { Paper, Button, Grid } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

import { auth } from '../../app/firebase';

export const testId = 'view--sign-in';

export interface SignInProps {}

export default function SignIn({}: SignInProps): JSX.Element {
    return (
        <Paper elevation={0} component="main" data-testid={testId}>
            <Container
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                // rowSpacing={2}
            >
                <Grid item xs={12}>
                    <Button
                        color="primary"
                        variant="contained"
                        // disableElevation
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
