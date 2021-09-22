import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    User,
} from 'firebase/auth';

import { RootState, AppThunk } from '../app/store';
import { auth } from '../app/firebase';

import storageAPI from '../helpers/storageAPI';

type UserType = User | null;
type ConnectionType = boolean;
type LoggedType = boolean;

interface UserState {
    user: UserType;
}

interface AuthState extends UserState {
    connected: ConnectionType;
}

const initialState: AuthState = {
    ...{ user: null, connected: false },
    ...(storageAPI.get<UserState>('auth') || {}),
};

const providers = {
    google: new GoogleAuthProvider(),
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUser: (state, { payload: user }: PayloadAction<UserType>) => {
            storageAPI.set<UserState>('auth', {
                user,
            });

            return { ...state, user };
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
export const selectUser = (state: RootState) => state.auth.user;
export const selectConnection = (state: RootState) => state.auth.connected;

export default authSlice.reducer;
