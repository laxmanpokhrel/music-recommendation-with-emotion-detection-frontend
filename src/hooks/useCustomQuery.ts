import {
  QueryObserverOptions,
  QueryOptions,
  useQuery,
  UseQueryResult,
} from "react-query";

//! this part still needs to be configured. I think this approach will not work well

// export default function useCustomQuery<T>(  query: QueryOptions extends QueryObserverOptions): UseQueryResult<T | T[], Error> {
export default function useCustomQuery<T>(
  query?: QueryOptions<T | T[]> | QueryObserverOptions<T | T[]>
): UseQueryResult<T | T[], Error> {
  const result = useQuery<T | T[], Error>(query);
  return result;
}
