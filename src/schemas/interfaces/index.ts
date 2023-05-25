import { ButtonHTMLAttributes, HTMLAttributes, LazyExoticComponent } from 'react';
import Permission from '@Constants/Permission';

import { QueryParamsType } from '@Schemas/types';

export default interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  authenticated: boolean;
  permissionType?: Permission | undefined;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export interface IDivProps extends HTMLAttributes<HTMLDivElement> {}

export interface IFetchDataProps<T> {
  queryParams?: QueryParamsType<T>;
  params?: Record<string, any>;
}

export interface IFetchPaginatedDataProps<T> {
  queryParams?: QueryParamsType<T>;
  params?: Record<string, any>;
}
