import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app/store';

import storageAPI from '../helpers/storageAPI';

interface ShortUser {
    displayName: string | null;
    photoURL: string | null;
    uid: string;
}

export type UserType = ShortUser | null;
export type ConnectionType = boolean;
export type LoggedType = boolean;

interface UserState {
    user: UserType;
}

export interface AuthState extends UserState {
    connected: ConnectionType;
    logged: LoggedType;
}

const authFromStorage = storageAPI.get<UserState>('auth') || {};
const initialState: AuthState = {
    ...{ user: null, connected: false, logged: false },
    user: authFromStorage?.user || null,
    logged: !!authFromStorage?.user,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUser: (state, { payload: user }: PayloadAction<UserType>) => {
            storageAPI.set<UserState>('auth', {
                user,
            });

            return { ...state, user, logged: !!user };
        },
        changeConnection: (
            state,
            { payload: connected }: PayloadAction<ConnectionType>
        ) => {
            return { ...state, connected };
        },
    },
});

export const { changeUser, changeConnection } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectLogged = (state: RootState) => state.auth.logged;
export const selectConnection = (state: RootState) => state.auth.connected;

export default authSlice.reducer;
