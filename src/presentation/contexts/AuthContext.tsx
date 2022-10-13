import usePersistedState from '@presentation/hooks/usePersistedState';
import { createContext } from 'react';

interface IAuthContext<T = any> {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  user: T | null;
  roles: string[];
}

export const AuthContext = createContext({} as IAuthContext);

type AuthProviderType = { children: React.ReactNode };
export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [user, setUser, clearUser] = usePersistedState('user', null);

  const login = async (username: string, password: string) => {
    try {
      //TODO: implement call;
    } catch (error: Error | any) {
      console.error(error);
      throw error;
    }
  };

  const logout = () => {
    clearUser();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, roles: ['*'] }}>
      {children}
    </AuthContext.Provider>
  );
};
