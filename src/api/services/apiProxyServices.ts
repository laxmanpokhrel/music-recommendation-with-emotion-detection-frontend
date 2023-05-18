import { api } from '@Api/config';
/**
 *
 * @param path server endpoint
 * @param ClassModule module to which the data received from the server belongs to. It is optional
 * @returns the object instances of the data received from the server
 */

export const getService = async (proxy: string, path: string, ClassModule?: any, params?: Record<string, any>) => {
  const response = await api.get(`${proxy}${path}`, params);
  const instances = ClassModule
    ? response.data.map((item: any) => {
        return new ClassModule(item);
      })
    : null;
  return instances || response.data;
};

export const getSingleService = async (proxy: string, path: string, id: string, ClassModule?: any) => {
  const response = await api.get(`${proxy}${path}/${id}`);
  return ClassModule ? new ClassModule(response.data) : response.data;
};

export const patchService = async (proxy: string, path: string, params: Record<string, any> | FormData) => {
  const response = await api.patch(`${proxy}${path}`, { params });
  return response.data;
};

export const postService = async (proxy: string, path: string, payload: Record<string, any> | FormData) => {
  const response = await api.post(`${proxy}${path}`, payload);
  return response.data;
};

export const softDeleteService = async (proxy: string, path: string, id: string) => {
  const response = await api.patch(`${proxy}${path}/${id}`, { params: { is_deleted: true } });
  return response.data;
};

export const hardDeleteService = async (proxy: string, path: string, id: string) => {
  const response = await api.delete(`${proxy}${path}/${id}`);
  return response.data;
};

export const getPaginatedService = async (
  proxy: string,
  path: string,
  ClassModule?: any,
  params?: Record<string, any>,
) => {
  const response = await api.get(`${proxy}${path}`, params);
  const instances = ClassModule
    ? response.data.results.map((item: any) => {
        return new ClassModule(item);
      })
    : response.data.results;
  return instances;
};
