import IRoute from '@Interface/IRoute';
import DashboardHome from '@Organisms/DashboardHome';
import Dashboardproject from '@Organisms/DashboardProject';
import DashboardAbout from '@Organisms/DashboardAbout';

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
];
export default dashboardRoutes;
