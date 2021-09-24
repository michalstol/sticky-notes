import React from 'react';
import {
    Route,
    Redirect,
    StaticContext,
    RouteComponentProps,
    RouteProps,
} from 'react-router';

import useAuth from '../../hooks/useAuth';
import { connectedPaths } from '../../types/routingPaths';

export interface ConnectedRouteProps extends RouteProps {
    path: connectedPaths;
}

export default function ConnectedRoute({
    path,
    children,
    ...props
}: ConnectedRouteProps): JSX.Element {
    const { connected } = useAuth();

    const redirectHandler = ({
        location,
    }: RouteComponentProps<
        {
            [x: string]: string | undefined;
        },
        StaticContext,
        unknown
    >): JSX.Element => {
        return (
            <>
                {connected && children}
                {!connected && (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )}
            </>
        );
    };

    return <Route path={path} render={redirectHandler} {...props} />;
}
