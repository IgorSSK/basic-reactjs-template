import { useContext } from 'react';
import { AuthContext } from '@presentation/contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
