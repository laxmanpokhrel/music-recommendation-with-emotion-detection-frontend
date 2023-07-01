import { Route, Routes } from 'react-router-dom';
import { ReactNode, Suspense } from 'react';
import IRoute from '@Schemas/interfaces';
import Fallback from '@CustomComponents/Falback';
import useAuth from '@Hooks/useAuth';
import ProtectedRoute from './protectedRoute';

interface IGenerateRouteParams {
  routes: IRoute[];
  fallback?: ReactNode;
}

/**
 *  This is a function called `generateRoutes` that takes an object with two properties: `routes` (an
 * array of objects that implement the `IRoute` interface) and `fallback` (an optional ReactNode). The
 * function returns a JSX element that wraps a `Routes` component from the `react-router-dom` library.
 */
export default function generateRoutes({ routes, fallback = <Fallback /> }: IGenerateRouteParams) {
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={fallback}>
      <Routes>
        {routes?.map((route: IRoute) => {
          if (route.authenticated) {
            return (
              <Route key={route.name} element={<ProtectedRoute isAuthenticated={isAuthenticated()} />}>
                <Route key={route.name} path={route.path} element={<route.component />} />
              </Route>
            );
          }
          return <Route key={route.name} path={route.path} element={<route.component />} />;
        })}
      </Routes>
    </Suspense>
  );
}
