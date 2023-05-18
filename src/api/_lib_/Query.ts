import { useMutation, UseMutationResult, useQuery, UseQueryResult, useQueryClient } from 'react-query';
import {
  getPaginatedService,
  getService,
  getSingleService,
  hardDeleteService,
  patchService,
  postService,
  softDeleteService,
} from '@Api/services/apiProxyServices';
import { QueryParamsType, MutationParamsType } from '@Schemas/types/index';
import { IFetchDataProps, IFetchPaginatedDataProps } from '@Schemas/interfaces';
// import { objectsEqual } from '@Utils/index';

/**
 * while initializing this class you can give it a key on which the data received from the server can be stored and specity the module that will be specific to.
 * NOTE: key you provided will be used by fetch methods without modifying them, but other methods will add the service name provided by the method as prefix Eg: `post-mutation_key`
 */
class Query<T> {
  url: string;

  key = 'mutation_key';

  proxy: string;

  authenticated: boolean;

  ClassModule?: T;

  constructor(authenticated: boolean, url: string, key: string, proxy: string, ClassModule?: T) {
    this.url = url;
    this.key = key;
    this.proxy = proxy;
    this.authenticated = authenticated;
    this.ClassModule = ClassModule || undefined;
  }

  /**
   * Internally it uses `useQuery` from "react-query"
   * @param queryParams Params to pass to `useQuery`. "queryFn" is added by default according to standard. Also `queryKey` is added to the key provided during initialization
   * @returns the parans returned by useQuery hook
   */
  public fetchData(props: IFetchDataProps<T> = { params: {} }): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryKey: [this.proxy, this.key],
      queryFn: () =>
        this.ClassModule
          ? getService(this.authenticated, this.proxy, this.url, this.ClassModule, props.params)
          : getService(this.authenticated, this.proxy, this.url, props.params),
      ...props.queryParams,
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
      queryKey: [this.proxy, `singular-${this.key}`],
      queryFn: () => getSingleService(this.authenticated, this.proxy, this.url, id, this.ClassModule),
      ...queryParams,
    });
  }

  public fetchPaginatedleData(props: IFetchPaginatedDataProps<T> = { params: {} }): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryKey: [this.proxy, `paginated-${this.key}`],
      queryFn: () => getPaginatedService(this.authenticated, this.proxy, this.url, this.ClassModule, props.params),
      ...props.queryParams,
      keepPreviousData: true,
    });
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
      mutationKey: [this.proxy, `post-${this.key}`],
      onMutate: () => {
        //* display postinfo data notification
      },
      mutationFn: () => postService(this.authenticated, this.proxy, this.url, payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.key] });
        //* show notification here
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
    params: Record<string, any>,
  ): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [this.proxy, `patch-${this.key}`],
      onMutate: () => {},
      mutationFn: () => patchService(this.authenticated, this.proxy, this.url, params),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.key] });
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
      mutationKey: [this.proxy, `delete-${this.key}-s`],
      onMutate: () => {},
      mutationFn: () => softDeleteService(this.authenticated, this.proxy, this.url, id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.key] });
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
      mutationKey: [this.proxy, `delete-${this.key}-s`],
      onMutate: () => {
        // * display posting data notification
      },
      mutationFn: () => hardDeleteService(this.authenticated, this.proxy, this.url, id),
      onSuccess: () => {
        // * Here we can follow two approach for updating the list
        // * 1. We can manually search the data and remove it, which is done as:
        // * 2. We can inform useQuery that the stored data is not invalid. On doing so react-query will fetch the data again, which is done as:
        queryClient.invalidateQueries({ queryKey: [this.key] });
      },
      ...mutationParams,
    });
  }
}
export default Query;
