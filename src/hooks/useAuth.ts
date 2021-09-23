import { useAppSelector } from '../app/hooks';
import { selectAuth, AuthState } from '../reduxSlices/authorizedSlice';

export default function useAuth(): AuthState {
    return useAppSelector(selectAuth);
}
