import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';

import { auth } from '../../app/firebase';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
    changeUser,
    changeConnection,
    selectUser,
    selectConnection,
} from '../../reduxSlices/authorizedSlice';

interface AuthWatcherProps {
    showState?: boolean;
}

export default function AuthWatcher({
    showState = false,
}: AuthWatcherProps): JSX.Element {
    const dispatch = useAppDispatch();
    const connected = useAppSelector(selectConnection);
    const currentUser = useAppSelector(selectUser);

    const [init, setInit] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, fUser => {
            if (!init) {
                dispatch(changeConnection(true));
                setInit(true);
            }

            dispatch(changeUser(fUser));
        });

        return unsubscribe;
    }, []);

    return (
        <>
            {showState && (
                <Status>
                    <ul>
                        <li>
                            <strong>connected</strong>: {connected.toString()}
                        </li>
                        <li>
                            <strong>sign in</strong>:{' '}
                            {!!currentUser?.toString() || 'false'}
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
