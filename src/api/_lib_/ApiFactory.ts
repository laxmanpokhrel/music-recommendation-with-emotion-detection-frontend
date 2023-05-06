import {
  getPaginatedService,
  getService,
  getSingleService,
  hardDeleteService,
  patchService,
  postService,
  softDeleteService,
} from '@Api/services/lib';
import { hasBinaryData, jsonToFormData, objectsEqual } from '@Utils/index';
import { useMutation, UseMutationResult, useQuery, UseQueryResult, QueryClient, useQueryClient } from 'react-query';
import { QueryParamsType, MutationParamsType } from '@Types/index';

interface IFactoryProps {
  url: string;
  key: string;
}

/**
 * while initializing this class you can give it a key on which the data received from the server can be stored and specity the module that will be specific to.
 * NOTE: key you provided will be used by fetch methods without modifying them, but other methods will add the service name provided by the method as prefix Eg: `post-mutation_key`
 */
class Query<T> {
  url = '';
  key = 'mutation_key';

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  /**
   * Internally it uses `useMutation` from "react-query"
   * @param queryParams Params to pass to `useMutation`. "mutationFn" is added by default according to standard.
   * @param payload Payload to deliver to the server.
   * @returns
   */

  public postData(
    mutationParams: MutationParamsType,
    payload: Record<string, any>,
  ): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [`post-${this.key}`],
      onMutate: () => {
        // !display postinfo data notification
      },
      mutationFn: () => postService(this.url, payload),
      onSuccess: (data, variables, context) => {
        // queryClient.invalidateQueries({ queryKey: [this.key] });
        const previousData: T[] | undefined = queryClient.getQueryData(this.key);
        if (previousData) queryClient.setQueryData(this.key, [data, ...previousData]);
        //! show notification here
      },
      ...mutationParams,
    });
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "queryFn" is added by default according to standard.
   * @param payload Payload to deliver to the server.
   * @returns
   */

  public patchData(
    mutationParams: MutationParamsType,
    payload: Record<string, any>,
  ): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [`patch-${this.key}`],
      onMutate: () => {
        // !display patching data notification
      },
      mutationFn: () => patchService(this.url, payload),
      onSuccess: (data, variables, context) => {
        // queryClient.invalidateQueries({ queryKey: [this.key] });
        const previousData: T[] | undefined = queryClient.getQueryData(this.key);
        if (previousData) {
          const index: number = previousData?.findIndex((item) => objectsEqual(item, payload));
          if (index > -1) previousData[index] = data;
          queryClient.setQueryData(`${this.key}`, [...previousData]);
        }
        //! show notification here
      },
      ...mutationParams,
    });
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "queryFn" is added by default according to standard.
   * @returns
   */

  public softDeleteData(mutationParams: MutationParamsType, id: string): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [`delete-${this.key}-s`],
      onMutate: () => {
        //! display deleting data notification
      },
      mutationFn: () => softDeleteService(this.url, id),
      onSuccess: (data, variable, context) => {
        // queryClient.invalidateQueries({ queryKey: [this.key] });
        const previousData: T[] | undefined = queryClient.getQueryData(this.key);
        if (previousData) {
          const data: T[] | undefined = previousData.filter(({ id }) => id === id);
          if (data) {
            const index: number = previousData?.findIndex((item) => objectsEqual(item, data[0]));
            if (index > -1) previousData[index] = data[0];
            queryClient.setQueryData(`${this.key}`, [...previousData]);
          }
        }
        //! show notification here
      },
      ...mutationParams,
    });
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "queryFn" is added by default according to standard.
   * @returns
   */

  public hardDeleteData(id: string, mutationParams?: MutationParamsType): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [`delete-${this.key}-s`],
      onMutate: () => {
        // !display posting data notification
      },
      mutationFn: () => hardDeleteService(this.url, id),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: [this.key] });
        const previousData: T[] | undefined = queryClient.getQueryData(this.key);
        if (previousData) {
          // remove the item from the cache logic
          const data: T[] | undefined = previousData.filter((item) => item.id === id);
          if (data) {
            const index: number = previousData?.findIndex((item) => objectsEqual(item, data[0]));
            if (index > -1) previousData[index] = data[0];
            queryClient.setQueryData(`${this.key}`, [...previousData]);
          }
        }
        //! show notification here
      },
      ...mutationParams,
    });
  }

  /**
   * Internally it uses `useQuery` from "react-query"
   * @param queryParams Params to pass to `useQuery`. "queryFn" is added by default according to standard. Also `queryKey` is added to the key provided during initialization
   * @returns the parans returned by useQuery hook
   */
  public fetchData(queryParams?: QueryParamsType<T>): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryKey: [this.key],
      queryFn: () => getService(this.url),
      ...queryParams,
    });
  }

  /**
   * Internally it uses `useQuery` from "react-query" to fetch single data from the server
   * @param queryParams Params to pass to `useQuery`. "queryFn" is added by default according to standard convention.
   * @param id Indetifier of the data defined on the server
   * @returns
   */
  public fetchSingleData(id: string, queryParams?: QueryParamsType<T>): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryKey: [`singular-${this.key}`],
      queryFn: () => getSingleService(this.url, id),
      ...queryParams,
    });
  }

  public fetchPaginatedleData(id: string, queryParams?: QueryParamsType<T>): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryKey: [`paginated-${this.key}`],
      queryFn: () => getPaginatedService(this.url, id),
      ...queryParams,
      keepPreviousData: true,
    });
  }
}

// export default Query;

//! this class insures that the objects of Query class will always have unique props
class ApiFactory {
  static cache: Map<string, Query<any>> = new Map();

  creteQuery<T extends { id: string }>(url: string, key: string) {
    const indentifier = `${url}-${key}`;
    let query = ApiFactory.cache.get(indentifier);
    if (!query) {
      query = new Query<T>(url, key);
      ApiFactory.cache.set(indentifier, query);
    }
    return query;
  }
}
export default ApiFactory;
