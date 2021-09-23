import React from 'react';
import { useAppSelector } from '../app/hooks';
import {
    selectAuth,
    UserType,
    ConnectionType,
    LoggedType,
} from '../reduxSlices/authorizedSlice';

export default function useAuth(): [ConnectionType, LoggedType, UserType] {
    const { connected, logged, user } = useAppSelector(selectAuth);

    return [connected, logged, user];
}
