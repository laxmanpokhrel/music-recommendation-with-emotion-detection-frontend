import IRoute from '@Schemas/interfaces/IRoute';
import DashboardHome from '@Organisms/DashboardHome';
import Dashboardproject from '@Organisms/DashboardProject';
import DashboardAbout from '@Organisms/DashboardAbout';
import DashboardComponents from '@Organisms/DashboardComponents';

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
    path: '/about',
    name: 'About ',
    component: DashboardAbout,
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
