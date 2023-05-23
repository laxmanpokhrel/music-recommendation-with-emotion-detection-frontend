import IRoute from '@Schemas/interfaces';
import DashboardHome from '@Organisms/DashboardHome';
import Dashboardproject from '@Organisms/DashboardProject';
import DashboardComponents from '@Organisms/DashboardComponents';
import DashboardUseForm from '@Organisms/DashboardUseForm';
import DashboardProxyTest from '@Organisms/DashboardProxyTest';

const dashboardRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardHome,
    authenticated: false,
  },
  {
    path: '/project',
    name: 'Project',
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
  {
    path: '/use-form',
    name: 'Use form test ',
    component: DashboardUseForm,
    authenticated: false,
  },
];
export default dashboardRoutes;
