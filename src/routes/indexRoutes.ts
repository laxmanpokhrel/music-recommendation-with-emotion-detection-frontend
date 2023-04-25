import IRoute from "@Interface/IRoute";
import ProjectPage from "@Pages/ProjectPage";
import Permission2 from "@Constants/Permission/Permission2";
import AboutPage from "@Pages/AboutPage";

const indexRoutes: IRoute[] = [
  {
    path: "/",
    name: "Project ",
    component: ProjectPage,
    authenticated: false,
    permissionType: Permission2.PER1,
  },

  {
    path: "/about",
    name: "About ",
    component: AboutPage,
    authenticated: false,
    permissionType: Permission2.PER2,
  },
];
export default indexRoutes;
