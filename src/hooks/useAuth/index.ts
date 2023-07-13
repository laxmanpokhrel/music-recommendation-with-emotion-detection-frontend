import useUser from '../useUser';

export default function useAuth() {
  const { user } = useUser();
  return { isAuthenticated: !!user };
}
