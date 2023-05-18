import IRoute from '@Schemas/interfaces';
import DashboardHome from '@Organisms/DashboardHome';
import Dashboardproject from '@Organisms/DashboardProject';
import DashboardComponents from '@Organisms/DashboardComponents';
import DashboardProxyTest from '@Organisms/DashboardProxyTest';

const dashboardRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Nav 1 ',
    component: DashboardHome,
    authenticated: false,
  },
  {
    path: '/project',
    name: 'Nav 1 ',
    component: Dashboardproject,
    authenticated: false,
  },
  {
    path: '/proxy-test',
    name: 'Proxy Test',
    component: DashboardProxyTest,
    authenticated: false,
  },
  {
    path: '/components',
    name: 'Components ',
    component: DashboardComponents,
    authenticated: false,
  },
];
export default dashboardRoutes;
