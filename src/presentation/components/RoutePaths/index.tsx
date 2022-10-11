import Text from '@presentation/components/Text';
import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { RoutePathsContainer, Paths } from './styles';

type RoutePathsProps = {};

const RoutePaths: React.FC<RoutePathsProps> = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <RoutePathsContainer>
      <Paths>
        <RouterLink to="/">Home</RouterLink>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Text key={to} textTransform="capitalize">
              {value}
            </Text>
          ) : (
            <RouterLink to={to}>{value}</RouterLink>
          );
        })}
      </Paths>
      <Text variant="h4" textTransform="capitalize">
        {`${pathnames[pathnames.length - 1] ?? 'Home'} ${pathnames[pathnames.length - 2] ?? ''}`}
      </Text>
    </RoutePathsContainer>
  );
};
export default RoutePaths;
