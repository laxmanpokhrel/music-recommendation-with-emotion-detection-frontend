import React from 'react';
import IRoute from '@Interface/IRoute';
import TestPage from '@Pages/__test__/index.test';

const appRoutes: IRoute[] = [
  {
    path: '/test',
    name: 'Home ',
    component: TestPage,
    authenticated: false,
  },
];
export default appRoutes;
