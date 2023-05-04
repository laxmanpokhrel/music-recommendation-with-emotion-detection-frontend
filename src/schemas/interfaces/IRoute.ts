import Permission from '@Constants/Permission';
import { ComponentType, LazyExoticComponent, ReactNode } from 'react';

export default interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element>;
  authenticated: boolean;
  permissionType?: Permission | undefined;
}
