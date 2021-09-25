import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fab } from '@mui/material';
import { AddSharp as IconAdd } from '@mui/icons-material';

export default function AddButton(): JSX.Element {
    return (
        <Container to="/create">
            <Fab disableFocusRipple color="primary" size="large">
                <IconAdd />
            </Fab>
        </Container>
    );
}

const Container = styled(Link)`
    position: fixed;
    bottom: 15px;
    right: 20px;

    &:active,
    &:focus,
    &:hover {
        outline: 0;
    }
`;
