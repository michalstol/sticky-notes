import { CircularProgress, Grid, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';

import useAuth from '../../hooks/useAuth';

import LocationState from '../../types/locationState';

export const testId = 'view--connection';

export default function Connection(): JSX.Element {
    const { connected, logged } = useAuth();
    const history = useHistory();
    const location = useLocation<LocationState>();
    const defaultFrom = { pathname: logged ? '/dashboard' : '/sign-in' };
    const { from } = location.state || { from: { pathname: null } };
    const redirectPath =
        !from.pathname || (from.pathname === '/sign-in' && logged)
            ? defaultFrom
            : from || defaultFrom;

    useEffect(() => {
        setTimeout(() => {
            history.replace(redirectPath);
        }, 1000);
    }, [connected, history, redirectPath]);

    return (
        <Paper elevation={0} component="main" data-testid={testId}>
            <Container
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <CircularProgress size="80px" />
                </Grid>
            </Container>
        </Paper>
    );
}

const Container = styled(Grid)`
    min-height: 100vh;
`;
