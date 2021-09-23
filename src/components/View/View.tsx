import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Paper } from '@mui/material';

interface ViewProps {
    children: React.ReactNode;
}

export const testId = 'view';

const viewSettings = {
    variants: {
        initial: {
            opacity: 0,
            scale: 0.98,
        },
        in: {
            opacity: 1,
            scale: 1,
        },
        out: {
            opacity: 0,
            scale: 0.98,
        },
    },
    transition: {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.2,
    },
};

export default function View({ children }: ViewProps): JSX.Element {
    return (
        <Container
            initial="initial"
            animate="in"
            exit="out"
            variants={viewSettings.variants}
            transition={viewSettings.transition}
        >
            <Paper elevation={0} component={Main} data-testid={testId}>
                {children}
            </Paper>
        </Container>
    );
}

const Container = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    z-index: 1;
`;

const Main = styled.main`
    position: re;
    min-height: 100%;
`;
