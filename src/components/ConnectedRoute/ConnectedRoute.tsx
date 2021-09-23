import React from 'react';
import {
    Route,
    Redirect,
    RouteComponentProps,
    StaticContext,
} from 'react-router';
import useAuth from '../../hooks/useAuth';

export interface ConnectedRouteProps {
    path: string;
    children: React.ReactNode;
}

export default function ConnectedRoute({
    path,
    children,
}: ConnectedRouteProps): JSX.Element {
    const [connected] = useAuth();

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
                {connected && (
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
