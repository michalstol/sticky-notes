import { useAppSelector } from '../app/hooks';
import {
    selectAuth,
    AuthState,
    StrictAuthState,
} from '../redux/slices/authorizedSlice';

export default function useAuth<B extends boolean>(
    strict?: B
): B extends true ? StrictAuthState : AuthState {
    const auth = useAppSelector(selectAuth);

    if (strict) return auth as any;

    return auth as any;
}
