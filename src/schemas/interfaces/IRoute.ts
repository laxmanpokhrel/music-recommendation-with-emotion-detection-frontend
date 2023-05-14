/* eslint-disable no-unused-vars */
import Permission from '@Constants/Permission';
import { LazyExoticComponent } from 'react';

type ComponentType = LazyExoticComponent<() => JSX.Element> | (() => JSX.Element) | ((props: any) => JSX.Element);
type WrappedComponentType<T extends { [key: string]: any }> = (WrappedComponent: React.ComponentType<T>) => React.FC<T>;
export default interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: ComponentType | WrappedComponentType<any>;
  authenticated: boolean;
  permissionType?: Permission | undefined;
}
