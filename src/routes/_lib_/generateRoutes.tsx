import IRoute from '@Interface/IRoute';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

export default function generateRoutes(routes: IRoute[]) {
  return (
    <Suspense fallback={<h3>Loding Nested Part...</h3>}>
      <Routes>
        {routes?.map((route) => (
          <Route key={JSON.stringify(route)} path={route.path} element={route.component()} />
        ))}
      </Routes>
    </Suspense>
  );
}
