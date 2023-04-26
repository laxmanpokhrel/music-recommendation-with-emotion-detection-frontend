import { api } from "@Api/config";
export const getService = async (url: string) => {
  const response = await api.get(`/api/${url}`);
  return response.data;
};

export const patchService = async (url: string, payload: JSON | FormData) => {
  const response = await api.patch(`/api/${url}`, payload);
  return response.data;
};

export const postService = async (url: string, payload: JSON | FormData) => {
  const response = await api.post(`/api/${url}`, payload);
  return response.data;
};

export const softDeleteService = async (url: string) => {
  const response = await api.patch(`/api/${url}`, { is_deleted: true });
  return response.data;
};

export const hardDeleteService = async (url: string) => {
  const response = await api.delete(`/api/${url}`);
  return response.data;
};
