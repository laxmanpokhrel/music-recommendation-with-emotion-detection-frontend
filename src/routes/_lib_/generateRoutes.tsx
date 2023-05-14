import { Route, Routes } from 'react-router-dom';
import { ReactNode, Suspense, useEffect } from 'react';
import IRoute from '@Schemas/interfaces/IRoute';
import Fallback from '@CustomComponents/Falback';

interface IGenerateRouteParams {
  routes: IRoute[];
  fallback?: ReactNode;
}
export default function generateRoutes({ routes, fallback = <Fallback /> }: IGenerateRouteParams) {
  return (
    <Suspense fallback={fallback}>
      <Routes>
        {routes?.map((route) => (
          <Route key={route.name} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Suspense>
  );
}
