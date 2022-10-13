import React from 'react';
import { useAuth } from '@presentation/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: React.ReactElement;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    logout();
    navigate('/login');
  }

  return children;
};

export default PrivateRoute;
