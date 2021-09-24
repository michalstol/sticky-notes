import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import styled from 'styled-components';

import { auth } from '../../app/firebase';
import { useAppDispatch } from '../../app/hooks';
import useAuth from '../../hooks/useAuth';

import {
    changeUser,
    changeConnection,
} from '../../redux/slices/authorizedSlice';

interface AuthWatcherProps {
    showState?: boolean;
}

let singletonInstance = false;

export default function AuthWatcher({
    showState = false,
}: AuthWatcherProps): JSX.Element {
    const dispatch = useAppDispatch();
    const { connected, logged } = useAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, fUser => {
            if (!singletonInstance) {
                singletonInstance = true;
                dispatch(changeConnection(true));
            }

            if (!!fUser) {
                const { displayName, photoURL, uid } = fUser;
                const newUser = {
                    uid,
                    displayName,
                    photoURL,
                };

                dispatch(changeUser(newUser));
            } else {
                dispatch(changeUser(null));
            }
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <>
            {showState && (
                <Status>
                    <ul>
                        <li>
                            <strong>connected</strong>: {connected.toString()}
                        </li>
                        <li>
                            <strong>sign in</strong>: {logged.toString()}
                        </li>
                        <li>
                            <button onClick={signOut.bind(undefined, auth)}>
                                signOut
                            </button>
                        </li>
                    </ul>
                </Status>
            )}
        </>
    );
}

const Status = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 0.8em;
    opacity: 0.3;

    &:hover {
        opacity: 1;
    }

    ul {
        margin: 0;
        padding: 5px;
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    li {
        text-align: center;
        flex: 1 1 auto;
    }
`;
