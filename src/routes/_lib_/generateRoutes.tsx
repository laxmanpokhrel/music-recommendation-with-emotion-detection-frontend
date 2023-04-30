import IRoute from '@Interface/IRoute';
import { Route, Routes } from 'react-router-dom';
import { ReactNode, Suspense } from 'react';

interface IGenerateRouteParams {
  routes: IRoute[];
  fallback?: ReactNode;
}
export default function generateRoutes({ routes, fallback = <h3>Loading Routes...</h3> }: IGenerateRouteParams) {
  return (
    <Suspense fallback={fallback}>
      <Routes>
        {routes?.map((route) => (
          <Route key={JSON.stringify(route)} path={route.path} element={route.component()} />
        ))}
      </Routes>
    </Suspense>
  );
}
