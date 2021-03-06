import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface SwitchGroupProps {
    children: React.ReactNode;
}

export const testId = 'switch-group';

export default function SwitchGroup({
    children,
}: SwitchGroupProps): JSX.Element {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter initial={false} data-testid={testId}>
            <Switch location={location} key={location.pathname}>
                {children}
            </Switch>
        </AnimatePresence>
    );
}
