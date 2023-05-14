/* eslint-disable no-unused-vars */
import Permission from '@Constants/Permission';
import { LazyExoticComponent } from 'react';

export default interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  authenticated: boolean;
  permissionType?: Permission | undefined;
}
