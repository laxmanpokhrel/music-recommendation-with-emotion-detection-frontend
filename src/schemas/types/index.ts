import { MutationOptions, QueryKey, QueryObserverOptions, QueryOptions } from 'react-query';

type Response<T> = {
  error: string | null;
  data: T | null;
};

export default Response;

export declare type QueryParamsType<T> =
  | QueryOptions<any, Error, any, QueryKey>
  | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>;

export declare type MutationParamsType = MutationOptions<any, Error, any, any>;
export type FormControlTypes = 'dropDown' | 'combobox' | 'input' | 'upload' | 'radio';
