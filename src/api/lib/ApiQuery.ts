import { api } from "@Api/config";
import {
  getService,
  getSingleService,
  hardDeleteService,
  patchService,
  postService,
  softDeleteService,
} from "@Api/services/lib";
import { hasBinaryData, jsonToFormData } from "@Utils/index";
import {
  MutationFunction,
  MutationOptions,
  QueryKey,
  QueryObserverOptions,
  QueryOptions,
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
  QueryClient,
  useQueryClient,
} from "react-query";

interface mutationParams {
  mutationFn: MutationFunction<unknown, void> | undefined;
}
declare type QueryParamsType<T> =
  | QueryOptions<any, Error, any, QueryKey>
  | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>;

declare type MutationParamsType = MutationOptions<any, Error, any, any>;

/**
 * while initializing this class you can give it a key on which the data received from the server can be stored and specity the nodule that will be specific to.
 * NOTE: key you provided will be used by load methods without modifying them, but other methods will add the service name provided by the method as prefix Eg: `post-mutation_key`
 */
class ApiQuery<T> {
  url = "";
  key = "mutation_key";

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  /**
   * Internally it uses `useQuery` from "react-query"
   * @param queryParams Params to pass to `useQuery`. "queryFn" is added by default according to standard. Also `queryKey` is added to the key provided during initialization
   * @returns
   */

  public loadData(
    queryParams: QueryParamsType<T>
  ): UseQueryResult<T | T[], Error> {
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

  public loadSingleData(
    queryParams: QueryParamsType<T>,
    id: string
  ): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryFn: () => getSingleService(this.url, id),
      ...queryParams,
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
    payload: Record<string, any>
  ): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [`post-${this.key}`],
      onMutate: () => {
        // !display postinf data notification
      },
      mutationFn: () => postService(this.url, payload),
      onSuccess: (data, variables, context) => {
        const previousData: T[] | undefined = queryClient.getQueryData(
          this.key
        );
        if (previousData)
          queryClient.setQueryData(this.key, [data, ...previousData]);

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
    payload: Record<string, any>
  ): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [`patch-${this.key}`],
      onMutate: () => {
        // !display postinf data notification
      },
      mutationFn: () => patchService(this.url, payload),
      onSuccess: () => {
        const previousData = queryClient.getQueryData(this.key);
        // updating the cache logic here
        queryClient.setQueryData(`${this.key}`, []);
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

  public softDeleteData(
    mutationParams: MutationParamsType
  ): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [`delete-${this.key}-s`],
      onMutate: () => {
        // !display postinf data notification
      },
      mutationFn: () => softDeleteService(this.url),
      onSuccess: () => {
        const previousData = queryClient.getQueryData(this.key);
        // remove the item from the cache logic
        queryClient.setQueryData(`${this.key}`, []);
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

  public hardDeleteData(
    mutationParams: MutationParamsType
  ): UseMutationResult<T, Error, void, unknown> {
    const queryClient = useQueryClient();
    return useMutation<T, Error, void, unknown>({
      mutationKey: [`delete-${this.key}-s`],
      onMutate: () => {
        // !display postinf data notification
      },
      mutationFn: () => hardDeleteService(this.url),
      onSuccess: () => {
        const previousData = queryClient.getQueryData(this.key);
        // remove the item from the cache logic
        queryClient.setQueryData(`${this.key}`, []);
        //! show notification here
      },
      ...mutationParams,
    });
  }
}

export default ApiQuery;
