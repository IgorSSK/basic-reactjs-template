import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { routes } from '@main/routes/routes-map';
import PrivateRoute from '@main/proxies/private-route';

const RoutesConfig: React.FC = () => {
  const mapToBrowserRouter = (): RouteObject[] => {
    return routes.map(route => ({
      path: route.path,
      element: route.private ? (
        <PrivateRoute>
          <route.layout>
            <route.component />
          </route.layout>
        </PrivateRoute>
      ) : (
        <route.layout>
          <route.component />
        </route.layout>
      )
    }));
  };

  const router = createBrowserRouter(mapToBrowserRouter());

  return <RouterProvider router={router} />;
};

export default RoutesConfig;
