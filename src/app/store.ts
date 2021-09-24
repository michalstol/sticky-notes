import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authorizedSlice';
import notesReducer from '../redux/slices/notesSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notes: notesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
