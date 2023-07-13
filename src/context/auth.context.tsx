import { ReactNode, createContext, useEffect, useState } from 'react';

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
});

const AuthContextProvider = ({ children }: IContextProps) => {
  let initialValue = null;
  try {
    initialValue = JSON.parse(localStorage.getItem('user') ?? '{}');
  } catch (err) {
    initialValue = null;
  }
  const [user, setUser] = useState<IUser | null>(initialValue);

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.setItem('user', JSON.stringify({}));
  }, [user]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
};

export default AuthContextProvider;
