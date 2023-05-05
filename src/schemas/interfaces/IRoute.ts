import Permission from "@Constants/Permission";
import { ComponentType, ReactNode } from "react";

export default interface IRoute {
  path: string;
  name: string;
<<<<<<< Updated upstream
  component: ComponentType<any>;
=======
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
>>>>>>> Stashed changes
  authenticated: boolean;
  permissionType?: Permission | undefined;
}
