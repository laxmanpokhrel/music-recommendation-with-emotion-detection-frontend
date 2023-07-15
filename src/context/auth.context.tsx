import { ReactNode, createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { authenticatedApi } from '../api/config';

interface IUser {
  data: {
    email: string;
  };
  tokens: {
    accessToken: string;
  };
}

interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  payload: any | null;
}
interface IContextProps {
  children: ReactNode;
}

export const Context = createContext<IAuthContext>({
  user: {
    data: {
      email: '',
    },
    tokens: {
      accessToken: '',
    },
  },
  setUser: () => {},
  payload: null,
});

const AuthContextProvider = ({ children }: IContextProps) => {
  const { data, refetch } = useQuery('user', async () => authenticatedApi.get(`${process.env.API_URL}/users/profile`), {
    enabled: false,
  });

  let initialValue = null;
  try {
    const localStorageItem = localStorage.getItem('user');
    initialValue = localStorageItem ? JSON.parse(localStorageItem) : null;
  } catch (err) {
    initialValue = null;
  }
  const [user, setUser] = useState<IUser | null>(initialValue);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      refetch();
      window.location.reload();
    } else localStorage.setItem('user', JSON.stringify(null));
  }, [user]);

  return (
    <Context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user,
        setUser,
        payload: data?.data?.data,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AuthContextProvider;
