import IRoute from '@Interface/IRoute';
import ProjectPage from '@Pages/ProjectPage';
import AboutPage from '@Pages/AboutPage';
import DashboardPage from '@Pages/DashboardPage';

const homePageRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Nav 1 ',
    component: ProjectPage,
    authenticated: false,
  },
  {
    path: '/about',
    name: 'About ',
    component: AboutPage,
    authenticated: false,
  },
  {
    path: '/dashboard',
    name: 'Dashboard ',
    component: DashboardPage,
    authenticated: false,
  },
];
export default homePageRoutes;
