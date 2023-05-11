import { api } from '@Api/config';
/**
 *
 * @param url server endpoint
 * @param ClassModule module to which the data received from the server belongs to
 * @returns the object instances of the data received from the server
 */

export const getService = async (url: string, ClassModule: any) => {
  const response = await api.get(`/api${url}`);
  const instances = response.data.map((item: any) => {
    return new ClassModule(item);
  });
  return instances;
};

export const getSingleService = async (url: string, id: string, ClassModule: any) => {
  const response = await api.get(`/api${url}/${id}`);
  return new ClassModule(response.data);
};

export const patchService = async (url: string, payload: Record<string, any> | FormData) => {
  const response = await api.patch(`/api${url}`, payload);
  return response.data;
};

export const postService = async (url: string, payload: Record<string, any> | FormData) => {
  const response = await api.post(`/api${url}`, payload);
  return response.data;
};

export const softDeleteService = async (url: string, id: string) => {
  const response = await api.patch(`/api${url}/${id}`, { is_deleted: true });
  return response.data;
};

export const hardDeleteService = async (url: string, id: string) => {
  const response = await api.delete(`/api${url}/${id}`);
  return response.data;
};

export const getPaginatedService = async (url: string, pageNumber: string, ClassModule: any) => {
  const response = await api.get(`/api${url}`, { params: { page: pageNumber } });
  const instances = response.data.map((item: any) => {
    return new ClassModule(item);
  });
  return instances;
};
