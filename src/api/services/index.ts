/* eslint-disable no-nested-ternary */
import { getProxy } from '@Api/_lib_/utils';
import { api, authenticatedApi, authenticatedFormDataApi } from '@Api/config';

/**
 * The function `getService` is an asynchronous function that makes an API request to a specified path
 * using a proxy, and returns the response data as instances of a specified class module if provided,
 * or as the raw response data otherwise.
 * @param {boolean} authenticated - A boolean value indicating whether the API request should be
 * authenticated or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the proxy server to be
 * used for making API requests.
 * @param {string} path - The `path` parameter is a string that represents the endpoint or URL path of
 * the API service you want to call. It specifies the specific resource or action you want to perform
 * on the server.
 * @param {any} [ClassModule] - The `ClassModule` parameter is an optional parameter that represents a
 * class module. It is used to create instances of the class module for each item in the response data.
 * If `ClassModule` is provided, the function will map over the response data and create instances of
 * the class module using the data
 * @param [params] - The `params` parameter is an optional object that contains key-value pairs
 * representing query parameters to be included in the request URL. These parameters are used to filter
 * or modify the data returned by the API.
 * @returns The function `getService` returns either an array of instances of `ClassModule` or the
 * `data` property of the `response` object.
 */
export const getService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  ClassModule?: any,
  params?: Record<string, any>,
) => {
  try {
    const envSpicificProxy = getProxy(proxy);
    const response = authenticated
      ? await authenticatedApi.get(`${envSpicificProxy}${path}`, { params })
      : await api.get(`${envSpicificProxy}${path}`, { params });
    const instances = ClassModule
      ? Array.isArray(response.data)
        ? response.data.map((item: any) => {
            return new ClassModule(item);
          })
        : new ClassModule(response.data)
      : null;
    return instances || response.data;
  } catch (err: any) {
    throw new Error(err.response.data.detail);
  }
};

/**
 * The function `getSingleService` retrieves a single service from an API, optionally authenticating
 * the request and returning the response as an instance of a specified class.
 * @param {boolean} authenticated - A boolean value indicating whether the API request should be
 * authenticated or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the proxy server to be
 * used for making API requests.
 * @param {string} path - The `path` parameter is a string that represents the endpoint or route of the
 * API that you want to make a request to. It specifies the specific resource or service that you want
 * to retrieve or interact with.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
 * service you want to retrieve.
 * @param {any} [ClassModule] - The ClassModule parameter is an optional parameter that represents a
 * class module. If provided, it will be used to create an instance of the class using the response
 * data from the API. If not provided, the response data will be returned as is.
 * @returns either an instance of `ClassModule` with the data from the response, or the data from the
 * response itself if `ClassModule` is not provided.
 */
export const getSingleService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  id: string,
  ClassModule?: any,
) => {
  try {
    const envSpicificProxy = getProxy(proxy);
    const response = authenticated
      ? await authenticatedApi.get(`${envSpicificProxy}${path}/${id}`)
      : await api.get(`${envSpicificProxy}${path}/${id}`);
    return ClassModule ? new ClassModule(response.data) : response.data;
  } catch (err: any) {
    throw new Error(err.response.data.detail);
  }
};

/**
 * The `patchService` function sends a PATCH request to a specified path with optional authentication
 * and proxy settings.
 * @param {boolean} authenticated - A boolean value indicating whether the request should be
 * authenticated or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the proxy server to be
 * used for making the API request. It is used to specify the base URL for the API endpoint.
 * @param {string} path - The `path` parameter is a string that represents the endpoint or URL path
 * where the PATCH request will be sent. It specifies the location of the resource that needs to be
 * updated or modified.
 * @param {Record<string, any> | FormData} params - The `params` parameter is a record object or a
 * FormData object. It is used to pass additional data or parameters to the API endpoint being patched.
 * The specific structure and content of the `params` object will depend on the requirements of the API
 * endpoint you are working with.
 * @returns the `data` property of the response object.
 */
export const patchService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  params: Record<string, any> | FormData,
) => {
  try {
    const envSpicificProxy = getProxy(proxy);
    const response = authenticated
      ? await authenticatedApi.patch(`${envSpicificProxy}${path}`, { params })
      : await api.patch(`${envSpicificProxy}${path}`, { params });
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.detail);
  }
};

/**
 * The `postService` function is an asynchronous function that sends a POST request to a specified
 * endpoint with optional authentication and form data.
 * @param {boolean} authenticated - A boolean value indicating whether the request should be
 * authenticated or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the proxy server to be
 * used for making the API request. It is used to prepend the base URL of the API endpoint.
 * @param {string} path - The `path` parameter is a string that represents the endpoint or route of the
 * API that you want to send a POST request to. It specifies the location where the request should be
 * sent.
 * @param {Record<string, any> | FormData} payload - The `payload` parameter is the data that will be
 * sent in the request body. It can be either a `Record<string, any>` object or a `FormData` object.
 * The `Record<string, any>` object is a generic object that can hold any key-value pairs, while the
 * `FormData
 * @param {boolean} [formData] - The `formData` parameter is a boolean flag that indicates whether the
 * payload should be sent as `FormData` or not. If `formData` is `true`, the payload will be sent as
 * `FormData`, otherwise it will be sent as a regular JSON object (`Record<string, any>`).
 * @returns the `data` property of the `response` object.
 */
export const postService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  payload: Record<string, any> | FormData,
  formData?: boolean,
) => {
  try {
    const envSpicificProxy = getProxy(proxy);
    const response = authenticated
      ? formData
        ? await authenticatedFormDataApi.post(`${envSpicificProxy}${path}`, payload)
        : await authenticatedApi.post(`${envSpicificProxy}${path}`, payload)
      : await api.post(`${envSpicificProxy}${path}`, payload);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message.join(', '));
  }
};

/**
 * The softDeleteService function performs a soft delete operation on a resource identified by its id.
 * @param {boolean} authenticated - The `authenticated` parameter is a boolean value that indicates
 * whether the user is authenticated or not. If `authenticated` is `true`, it means the user is
 * authenticated and an authenticated API call will be made. If `authenticated` is `false`, it means
 * the user is not authenticated and a regular
 * @param {string} proxy - The `proxy` parameter is a string that represents the proxy server to be
 * used for making the API request. It is used to specify the base URL for the API endpoint.
 * @param {string} path - The `path` parameter is a string that represents the endpoint or route of the
 * API that you want to send the PATCH request to. It specifies the location of the resource that you
 * want to update or soft delete.
 * @param {string} id - The `id` parameter is the identifier of the item that needs to be soft deleted.
 * It is used to specify which item should be marked as deleted in the database.
 * @returns the data from the response object.
 */
export const softDeleteService = async (authenticated: boolean, proxy: string, path: string, id: string) => {
  try {
    const envSpicificProxy = getProxy(proxy);
    const response = authenticated
      ? await authenticatedApi.patch(`${envSpicificProxy}${path}/${id}`, { params: { is_deleted: true } })
      : await api.patch(`${envSpicificProxy}${path}/${id}`, { params: { is_deleted: true } });
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.detail);
  }
};

/**
 * The function `hardDeleteService` performs a hard delete operation on a resource using an API, with
 * the option to authenticate and specify a proxy.
 * @param {boolean} authenticated - A boolean value indicating whether the API request should be
 * authenticated or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the proxy server to be
 * used for making the API request. It is used to specify the base URL for the API endpoint.
 * @param {string} path - The `path` parameter is a string that represents the endpoint or route of the
 * API that you want to make a DELETE request to. It specifies the location of the resource that you
 * want to delete.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
 * item that needs to be deleted.
 * @returns the data from the response.
 */
export const hardDeleteService = async (authenticated: boolean, proxy: string, path: string, id: string) => {
  try {
    const envSpicificProxy = getProxy(proxy);
    const response = authenticated
      ? await authenticatedApi.delete(`${envSpicificProxy}${path}/${id}`)
      : await api.delete(`${envSpicificProxy}${path}/${id}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.detail);
  }
};

/**
 * The function `getPaginatedService` is an asynchronous function that retrieves paginated data from an
 * API, optionally authenticating the request and mapping the response data to instances of a specified
 * class module.
 * @param {boolean} authenticated - A boolean value indicating whether the API request should be
 * authenticated or not.
 * @param {string} proxy - The `proxy` parameter is a string that represents the proxy server to be
 * used for making API requests. It is used to prepend the base URL of the API endpoint.
 * @param {string} path - The `path` parameter is a string that represents the endpoint or URL path of
 * the API you want to call. It specifies the specific resource or data you want to retrieve or
 * interact with.
 * @param {any} [ClassModule] - The `ClassModule` parameter is an optional parameter that represents a
 * class module. If provided, it is used to create instances of the class using the data returned from
 * the API response. If not provided, the API response data is returned as is.
 * @param [params] - The `params` parameter is an optional object that contains key-value pairs
 * representing the query parameters to be included in the API request. These parameters are used to
 * filter or modify the data returned by the API.
 * @returns an array of instances.
 */
export const getPaginatedService = async (
  authenticated: boolean,
  proxy: string,
  path: string,
  ClassModule?: any,
  params?: Record<string, any>,
) => {
  try {
    const envSpicificProxy = getProxy(proxy);
    const response = authenticated
      ? await authenticatedApi.get(`${envSpicificProxy}${path}`, { params })
      : await api.get(`${envSpicificProxy}${path}`, { params });
    const instances = ClassModule
      ? response.data.results.map((item: any) => {
          return new ClassModule(item);
        })
      : response.data.results;
    return instances;
  } catch (err: any) {
    throw new Error(err.response.data.detail);
  }
};
