import { api, authenticatedApi } from '@Api/config';

/**
 * This function retrieves data from an API endpoint and returns either the raw data or instances of a
 * specified class module.
 * @param {boolean} authenticated - A boolean value indicating whether the API request requires
 * authentication or not.
 * @param {string} proxy - The base URL of the API endpoint that the request will be sent to.
 * @param {string} path - The path parameter is a string that represents the endpoint or URL path of
 * the API that the function is trying to access. It is concatenated with the proxy parameter to form
 * the complete URL.
 * @param {any} [ClassModule] - ClassModule is an optional parameter that represents a class module
 * that can be used to instantiate objects from the data returned by the API. If provided, the function
 * will map the response data to instances of the provided class module. If not provided, the function
 * will return the raw response data.
 * @param [params] - params is an optional parameter of type Record<string, any> which represents the
 * query parameters to be sent with the GET request. It is an object where each key represents the name
 * of the parameter and the value represents the value of the parameter. For example, if you want to
 * send two parameters "name
 * @returns The function `getService` returns an array of instances of the `ClassModule` if
 * `ClassModule` is provided, otherwise it returns the `response.data` obtained from making a GET
 * request to the specified `path` using either an authenticated or unauthenticated API depending on
 * the value of the `authenticated` parameter.
 */
export const getService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  ClassModule?: any,
  params?: Record<string, any>,
) => {
  const response = authenticated
    ? await authenticatedApi.get(`${proxy}${path}`, { params })
    : await api.get(`${proxy}${path}`, { params });
  const instances = ClassModule
    ? response.data.map((item: any) => {
        return new ClassModule(item);
      })
    : null;
  return instances || response.data;
};

/**
 * This function retrieves a single service from an API endpoint and returns it as either raw data or
 * an instance of a specified class module.
 * @param {boolean} authenticated - a boolean value indicating whether the API request requires
 * authentication or not.
 * @param {string} proxy - The base URL of the API endpoint that the request will be sent to. It is
 * used to construct the full URL for the specific resource being requested.
 * @param {string} path - The path parameter is a string that represents the endpoint path of the API
 * that the function is trying to access. It is concatenated with the proxy and the id parameter to
 * form the complete URL of the API endpoint.
 * @param {string} id - The `id` parameter is a string representing the unique identifier of the
 * service that needs to be retrieved. It is used to construct the API endpoint URL for fetching the
 * service data.
 * @param {any} [ClassModule] - ClassModule is an optional parameter that represents a class module
 * that can be used to instantiate an object with the response data from the API call. If provided, the
 * function will create a new instance of the class module using the response data and return it. If
 * not provided, the function will simply return the
 * @returns The function `getSingleService` returns either the `response.data` or a new instance of
 * `ClassModule` with `response.data` as its argument, depending on whether `ClassModule` is provided
 * as an argument or not.
 */
export const getSingleService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  id: string,
  ClassModule?: any,
) => {
  const response = authenticated
    ? await authenticatedApi.get(`${proxy}${path}/${id}`)
    : await api.get(`${proxy}${path}/${id}`);
  return ClassModule ? new ClassModule(response.data) : response.data;
};

/**
 * This function sends a PATCH request to a specified API endpoint with optional authentication and
 * returns the response data.
 * @param {boolean} authenticated - A boolean value indicating whether the API request requires
 * authentication or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the base URL of the API
 * endpoint that the `patchService` function will send requests to. It is used to construct the full
 * URL for the specific endpoint that is being accessed.
 * @param {string} path - The path parameter is a string that represents the endpoint or URL path that
 * the patch request will be sent to. It is concatenated with the proxy parameter to form the full URL.
 * @param {Record<string, any> | FormData} params - The `params` parameter is a record of key-value
 * pairs or a `FormData` object that contains the data to be sent in the request body. It is used in
 * the `patch` request to update an existing resource on the server.
 * @returns the `data` property of the response object.
 */
export const patchService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  params: Record<string, any> | FormData,
) => {
  const response = authenticated
    ? await authenticatedApi.patch(`${proxy}${path}`, { params })
    : await api.patch(`${proxy}${path}`, { params });
  return response.data;
};

/**
 * This is a TypeScript function that sends a POST request to an API endpoint with optional
 * authentication and returns the response data.
 * @param {boolean} authenticated - A boolean value indicating whether the API request requires
 * authentication or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the base URL of the API
 * endpoint that the request will be sent to. It is used to prepend to the `path` parameter to form the
 * complete URL of the API endpoint.
 * @param {string} path - The `path` parameter is a string that represents the endpoint or URL path
 * where the HTTP POST request will be sent. It is concatenated with the `proxy` parameter to form the
 * complete URL.
 * @param {Record<string, any> | FormData} payload - The payload parameter is the data that will be
 * sent in the body of the HTTP POST request. It can be either a JSON object (Record<string, any>) or a
 * FormData object.
 * @returns the `data` property of the response object.
 */
export const postService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  payload: Record<string, any> | FormData,
) => {
  const response = authenticated
    ? await authenticatedApi.post(`${proxy}${path}`, payload)
    : await api.post(`${proxy}${path}`, payload);
  return response.data;
};

/**
 * This function soft deletes a resource by setting its "is_deleted" parameter to true, using either an
 * authenticated or unauthenticated API call.
 * @param {boolean} authenticated - A boolean value indicating whether the user is authenticated or
 * not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the base URL of the API
 * endpoint. It is used to construct the full URL of the resource that needs to be soft-deleted.
 * @param {string} path - The `path` parameter is a string that represents the endpoint path of the API
 * that the `softDeleteService` function will call. It is used to construct the full URL of the API
 * endpoint by concatenating it with the `proxy` parameter.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
 * resource that needs to be soft deleted.
 * @returns the data from the response of the API call made using either the authenticatedApi or api
 * object, depending on the value of the authenticated parameter. The data being returned is the result
 * of patching the resource with the specified id and setting the is_deleted parameter to true.
 */
export const softDeleteService = async (authenticated: boolean, proxy: string, path: string, id: string) => {
  const response = authenticated
    ? await authenticatedApi.patch(`${proxy}${path}/${id}`, { params: { is_deleted: true } })
    : await api.patch(`${proxy}${path}/${id}`, { params: { is_deleted: true } });
  return response.data;
};

/**
 * This function performs a hard delete operation on a resource using an API endpoint.
 * @param {boolean} authenticated - A boolean value indicating whether the API request should be
 * authenticated or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the base URL of the API
 * endpoint. It is used to construct the full URL of the resource to be deleted by appending the `path`
 * and `id` parameters.
 * @param {string} path - The `path` parameter is a string that represents the endpoint path of the API
 * that the `hardDeleteService` function will call to delete a resource. It is concatenated with the
 * `proxy` parameter and the `id` parameter to form the complete URL of the resource to be deleted.
 * @param {string} id - The `id` parameter is a string representing the unique identifier of the
 * resource that needs to be deleted. It is used to construct the URL endpoint for the DELETE request.
 * @returns The function `hardDeleteService` returns the data from the response of the API call made
 * using either the `authenticatedApi` or `api` instance, depending on the value of the `authenticated`
 * parameter. The API call is a `DELETE` request to the URL formed by concatenating the `proxy` and
 * `path` parameters, and appending the `id` parameter as the last segment of
 */
export const hardDeleteService = async (authenticated: boolean, proxy: string, path: string, id: string) => {
  const response = authenticated
    ? await authenticatedApi.delete(`${proxy}${path}/${id}`)
    : await api.delete(`${proxy}${path}/${id}`);
  return response.data;
};

/**
 * This function retrieves paginated data from an API endpoint and returns instances of a specified
 * class module if provided.
 * @param {boolean} authenticated - A boolean value indicating whether the API request requires
 * authentication or not.
 * @param {string} proxy - The proxy parameter is a string that represents the URL of the proxy server
 * that will be used to make the API request.
 * @param {string} path - The API endpoint path that the function will make a request to.
 * @param {any} [ClassModule] - ClassModule is an optional parameter that represents a class module
 * that can be used to instantiate objects from the data returned by the API. If provided, the function
 * will map the response data to instances of the provided class module. If not provided, the function
 * will return the response data as is.
 * @param [params] - params is a parameter of type Record<string, any> which is an object that can
 * contain any number of key-value pairs. It is used to pass additional parameters to the API endpoint
 * being called. These parameters can be used to filter, sort, or paginate the data being returned by
 * the API.
 * @returns an array of instances of a given class module or an array of objects, depending on whether
 * the `ClassModule` parameter is provided or not. The instances or objects are obtained from a
 * paginated API response, based on the `path` and `params` parameters, and using either an
 * authenticated or unauthenticated API client, depending on the `authenticated` parameter. The API
 * response
 */
export const getPaginatedService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  ClassModule?: any,
  params?: Record<string, any>,
) => {
  const response = authenticated
    ? await authenticatedApi.get(`${proxy}${path}`, { params })
    : await api.get(`${proxy}${path}`, { params });
  const instances = ClassModule
    ? response.data.results.map((item: any) => {
        return new ClassModule(item);
      })
    : response.data.results;
  return instances;
};
