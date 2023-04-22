import { ReactNode } from "react";
import Permissions from "@Constants/permissions"

interface IRoutes {
  route: string;
  component: ReactNode;
  authenticated: boolean;
  permission: keyof Permissions;
}