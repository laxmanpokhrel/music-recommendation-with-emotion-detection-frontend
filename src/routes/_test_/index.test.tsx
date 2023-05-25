import IRoute from '@Schemas/interfaces';
import TestPage from '@Pages/__test__/index.test';

const testRoutes: IRoute[] = [
  {
    path: '/test',
    name: 'Test ',
    component: TestPage,
    authenticated: false,
  },
];
export default testRoutes;
