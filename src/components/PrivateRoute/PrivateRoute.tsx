import React from 'react';
import {
    Route,
    Redirect,
    StaticContext,
    RouteComponentProps,
    RouteProps,
} from 'react-router';
import useAuth from '../../hooks/useAuth';

interface PrivateRouteProps extends RouteProps {}

export default function PrivateRoute({
    children,
    ...props
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

    return <Route {...props} render={redirectHandler} />;
}
