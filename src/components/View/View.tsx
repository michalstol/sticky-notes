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
        },
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0,
        },
    },
    transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3,
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
    position: relative;
`;

const Main = styled.main`
    position: relative;
    min-height: 100%;
`;
