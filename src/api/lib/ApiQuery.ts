import { api } from "@Api/config";
import {
  getService,
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

  public loadData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>
  ): UseQueryResult<T | T[], Error> {
    const loadDataService = api.get(`/api/${this.url}`);
    return useQuery<T | T[], Error>({
      queryFn: () => getService(this.url),
      ...queryParams,
    });
  }

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
