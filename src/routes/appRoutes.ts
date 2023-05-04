import React from 'react';
import IRoute from '@Interface/IRoute';
// Lazy loading
const HomePage = React.lazy(() => import('@Pages/HomePage'));
const DashboardPage = React.lazy(() => import('@Pages/DashboardPage'));
const AboutPage = React.lazy(() => import('@Pages/AboutPage'));

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Home ',
    component: HomePage,
    authenticated: false,
  },
  {
    path: '/about',
    name: 'About ',
    component: AboutPage,
    authenticated: false,
  },
  {
    path: '/dashboard/*',
    name: 'Dashboard ',
    component: DashboardPage,
    authenticated: false,
  },
];
export default appRoutes;
