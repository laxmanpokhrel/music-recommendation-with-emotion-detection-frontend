import Permission from '@Constants/Permission';
// eslint-disable-next-line no-unused-vars
import { ComponentType, LazyExoticComponent, ReactNode } from 'react';

export default interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  authenticated: boolean;
  permissionType?: Permission | undefined;
}
