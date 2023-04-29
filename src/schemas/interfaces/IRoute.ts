import Permission from '@Constants/Permission';
import { ComponentType, ReactNode } from 'react';

export default interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: () => JSX.Element;
  authenticated: boolean;
  permissionType?: Permission | undefined;
}
