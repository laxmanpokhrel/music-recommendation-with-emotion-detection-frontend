import { api } from "@Api/config";
import { fetchProjects } from "@Api/services/project";
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

  public loadData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>
  ): UseQueryResult<T | T[], Error> {
    const loadDataService = api.get(`/api/${this.url}`);
    const x = useQuery<T | T[], Error>({
      queryFn: fetchProjects,
      ...queryParams,
    });
    return x;
  }

  public patchData(
    queryParams:
      | QueryOptions<any, Error, any, QueryKey>
      | QueryObserverOptions<T | T[], Error, T | T[], T | T[], QueryKey>
  ): UseQueryResult<T | T[], Error> {
    const x = useQuery<T | T[], Error>({
      queryFn: fetchProjects,
      ...queryParams,
    });
    return x;
  }
}

export default ApiQuery;
