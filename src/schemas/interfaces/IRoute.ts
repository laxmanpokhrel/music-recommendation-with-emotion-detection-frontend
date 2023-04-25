import Permission from "@Constants/Permission";
import { ComponentType, ReactNode } from "react";

export default interface IRoute {
  path: string;
  name: string;
  component: ComponentType<any>;
  authenticated: boolean;
  permissionType?: Permission | undefined;
}
