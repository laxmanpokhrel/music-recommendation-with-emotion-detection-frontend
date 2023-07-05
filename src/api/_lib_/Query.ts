import { useMutation, UseMutationResult, useQuery, UseQueryResult, useQueryClient } from 'react-query';
import {
  getPaginatedService,
  getService,
  getSingleService,
  hardDeleteService,
  patchService,
  postService,
  softDeleteService,
} from '@Api/services';
import { QueryParamsType, MutationParamsType } from '@Schemas/types/index';
import { IFetchDataProps, IFetchPaginatedDataProps, IPostDataProps } from '@Schemas/interfaces';
// import { objectsEqual } from '@Utils/index';

/**
 *  `Query` is a TypeScript class that provides methods for fetching and mutating data using the
 * `react-query` library. It takes in parameters such as the URL of the API endpoint, a key to
 * store the data, and a proxy to use for authentication. The class provides methods for fetching
 * data, fetching a single data item, fetching paginated data, and performing mutations such as
 * patching and deleting data. The class uses the `useQuery` and `useMutation` hooks from
 * `react-query` to handle data fetching and mutations. */
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
    this.ClassModule = ClassModule;
  }

  /**
   * This function fetches data using a query key and parameters, and returns a result using the
   * useQuery hook in TypeScript.
   * @param props - The props parameter is an optional object that contains properties for configuring
   * the fetchData function. It has a generic type of IFetchDataProps<T>, which means that it can
   * accept any type T. The default value for props is an empty object that contains an empty params
   * property.
   * @returns The function `fetchData` is returning a `UseQueryResult` object which contains the result
   * of a query made using the `useQuery` hook. The result can be of type `T` or `T[]` (an array of
   * `T`), and the query is made using the `queryKey` and `queryFn` options. The `queryParams` object
   * is also included as
   */
  public fetchData(props: IFetchDataProps<T> = { params: {} }): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryKey: [this.proxy, this.key],
      queryFn: () =>
        this.ClassModule
          ? getService(this.authenticated, this.proxy, this.url, this.ClassModule, props.params)
          : getService(this.authenticated, this.proxy, this.url, undefined, props.params),
      ...props.queryParams,
    });
  }

  /**
   * This function fetches a single data item or an array of data items using a query key and query
   * parameters.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
   * data that needs to be fetched. It is used to retrieve a single record from the data source.
   * @param [queryParams] - queryParams is an optional parameter of type QueryParamsType<T>, which is a
   * generic type that can be defined by the user. It is used to pass additional query parameters to the
   * API endpoint being called by the fetchSingleData function. These parameters can include things like
   * filters, sorting options, pagination options,
   * @returns A function that uses the `useQuery` hook to fetch a single data item or an array of data
   * items, depending on the type `T`. The function takes an `id` parameter and an optional
   * `queryParams` parameter, which can be used to customize the query. The function returns a
   * `UseQueryResult` object that contains the data or an error if the query fails.
   */
  public fetchSingleData(id: string, queryParams?: QueryParamsType<T>): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryKey: [this.proxy, `singular-${this.key}`],
      queryFn: () => getSingleService(this.authenticated, this.proxy, this.url, id, this.ClassModule),
      ...queryParams,
    });
  }

  /**
   * This function fetches paginated data using a query key and query function, with optional
   * parameters and query parameters.
   * @param props - The props parameter is an optional object that contains additional properties to
   * configure the useQuery hook. It has a default value of an empty object. The
   * IFetchPaginatedDataProps<T> type specifies that the props object should have a params property of
   * type T, which is a generic type that can be
   * @returns The function `fetchPaginatedleData` is returning a `UseQueryResult` object from the
   * `useQuery` hook. This object contains the result of the query, as well as other information such
   * as loading and error states. The query key is set to an array containing the `proxy` and `key`
   * properties of the object, and the query function is defined using the `getPag
   */
  public fetchPaginatedleData(props: IFetchPaginatedDataProps<T> = { params: {} }): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryKey: [this.proxy, `paginated-${this.key}`],
      queryFn: () => getPaginatedService(this.authenticated, this.proxy, this.url, this.ClassModule, props.params),
      ...props.queryParams,
      keepPreviousData: true,
    });
  }

  /**
   * This function posts data using a mutation and handles notifications and query invalidation.
   * @param {MutationParamsType} mutationParams - An object containing additional parameters for the
   * useMutation hook, such as onError or onSettled.
   * @param payload - The payload parameter is a record (an object) that contains data to be sent in the
   * request body when making a POST request. It can contain any number of key-value pairs, where the
   * keys represent the names of the fields being sent and the values represent the values of those
   * fields.
   * @returns The function `postData` returns a `UseMutationResult` object, which is the result of
   * calling the `useMutation` hook with the provided parameters.
   */
  public postData(props: IPostDataProps = { mutationParams: {} }): UseMutationResult<T, Error, void, unknown> {
    // public postData(): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [this.proxy, `post-${this.key}`],
      onMutate: () => {
        //* display postinfo data notification
      },
      // mutationFn: () => postService(this.authenticated, this.proxy, this.url, props.payload),
      mutationFn: (receivedMutationData: any) =>
        postService(this.authenticated, this.proxy, this.url, receivedMutationData),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [this.key] });
        //* show notification here
      },
      ...(props.mutationParams || {}),
    });
  }

  /**
   * This function returns a mutation result for patching data, which invalidates queries upon success.
   * @param {MutationParamsType} mutationParams - an object containing optional parameters for the
   * useMutation hook, such as onSettled, onError, and retry. These parameters customize the behavior of
   * the mutation and can be used to handle errors and update the UI after the mutation is completed.
   * @param params - A record of key-value pairs representing the data to be patched.
   * @returns The function `patchData` returns a `UseMutationResult` object, which is the result of
   * calling the `useMutation` hook with the provided parameters and additional options.
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
   * This function performs a soft delete operation on data and returns a mutation result using the
   * useMutation hook in TypeScript.
   * @param {MutationParamsType} mutationParams - An object containing optional parameters for the
   * useMutation hook, such as onSettled, onError, and onMutate.
   * @param {string} id - The ID of the data that needs to be soft-deleted.
   * @returns The function `softDeleteData` returns a `UseMutationResult` object, which is the result of
   * calling the `useMutation` hook with some specific parameters.
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
   * This function performs a hard delete operation on data and updates the list using react-query.
   * @param {string} id - The ID of the data that needs to be deleted.
   * @param {MutationParamsType} [mutationParams] - Optional additional parameters that can be passed to
   * the useMutation hook, such as onSettled, onError, and retry. These parameters allow for
   * customization of the mutation behavior.
   * @returns The function `hardDeleteData` returns a `UseMutationResult` object, which is returned by
   * the `useMutation` hook. This object contains information about the mutation, such as the current
   * status of the mutation (loading, error, success), the result of the mutation, and functions to
   * trigger the mutation.
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
