import IRoute from "@Interface/IRoute";
import ProjectPage from "@Pages/ProjectPage";
import AboutPage from "@Pages/AboutPage";
import DashboardPage from "@Pages/DashboardPage";

const appRoutes: IRoute[] = [
  {
    path: "/",
    name: "Project ",
    component: ProjectPage,
    authenticated: false,
  },
  {
    path: "/about",
    name: "About ",
    component: AboutPage,
    authenticated: false,
  },
  {
    path: "/dashboard",
    name: "Dashboard ",
    component: DashboardPage,
    authenticated: false,
  },
];
export default appRoutes;
