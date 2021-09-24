import { useAppSelector } from '../app/hooks';
import { selectUser } from '../redux/slices/authorizedSlice';

export default function useUserUid(): null | string {
    const user = useAppSelector(selectUser);

    return user?.uid || null;
}
