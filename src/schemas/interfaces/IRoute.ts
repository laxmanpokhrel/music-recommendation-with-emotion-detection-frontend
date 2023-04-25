import Permissions from "@Constants/Permissions";

export default interface IRoute {
  path: string;
  name: string;
  component: JSX.Element;
  authenticated: boolean;
  permissionType: Permissions;
}
