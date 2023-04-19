import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { routes } from '@main/routes/routes-map';
import PrivateRoute from '@main/proxies/private-route';

const RoutesConfig: React.FC = () => {
  const mapToBrowserRouter = (): RouteObject[] => {
    const unnestedRoutes: any = [];
    routes.forEach(route => {
      if (route.children) {
        route.children.forEach(child =>
          unnestedRoutes.push({ ...child, path: route.path + child.path })
        );
      } else {
        unnestedRoutes.push(route);
      }
    });

    return unnestedRoutes.map(route => ({
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
