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
  QueryFunction,
  QueryKey,
  QueryObserverOptions,
  QueryOptions,
  useQuery,
  UseQueryResult,
} from "react-query";

class ApiQuery<T> {
  url = "";
  constructor(url: string) {
    this.url = url;
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "queryFn" is added by default according to standerd.
   * @returns
   */
  public loadData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>
  ): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryFn: () => getService(this.url),
      ...queryParams,
    });
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "QueryFn" is added by default according to standerd.
   * @param id Indetifier of the data defined on the server
   * @returns
   */
  public loadSingleData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>,
    id: string
  ): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryFn: () => getSingleService(this.url, id),
      ...queryParams,
    });
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "queryFn" is added by default according to standerd.
   * @param payload Payload to deliver to the server.
   * @returns
   */
  public postData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>,
    payload: JSON
  ): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryFn: () => postService(this.url, payload),
      ...queryParams,
    });
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "queryFn" is added by default according to standerd.
   * @param payload Payload to deliver to the server.
   * @returns
   */
  public patchData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>,
    payload: JSON
  ): UseQueryResult<T | T[], Error> {
    let newPayload: JSON | FormData;
    if (hasBinaryData(payload)) newPayload = jsonToFormData(payload);
    else newPayload = payload;
    return useQuery<T | T[], Error>({
      queryFn: () => patchService(this.url, newPayload),
      ...queryParams,
    });
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "queryFn" is added by default according to standerd.
   * @returns
   */
  public softDeleteData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>
  ): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryFn: () => softDeleteService(this.url),
      ...queryParams,
    });
  }

  /**
   *
   * @param queryParams Params to pass to useQuery. "queryFn" is added by default according to standerd.
   * @returns
   */
  public hardDeleteData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>
  ): UseQueryResult<T | T[], Error> {
    return useQuery<T | T[], Error>({
      queryFn: () => hardDeleteService(this.url),
      ...queryParams,
    });
  }
}

export default ApiQuery;
