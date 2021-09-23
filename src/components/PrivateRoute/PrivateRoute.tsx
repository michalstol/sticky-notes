import React from 'react';
import {
    Route,
    Redirect,
    RouteComponentProps,
    StaticContext,
} from 'react-router';
import useAuth from '../../hooks/useAuth';

export interface PrivateRouteProps {
    path: string;
    children: React.ReactNode;
}

export default function PrivateRoute({
    path,
    children,
}: PrivateRouteProps): JSX.Element {
    const { connected, logged } = useAuth();

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
                {connected && logged && children}
                {connected && !logged && (
                    <Redirect
                        to={{
                            pathname: '/sign-in',
                            state: { from: location },
                        }}
                    />
                )}
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

    return <Route path={path} render={redirectHandler} />;
}
