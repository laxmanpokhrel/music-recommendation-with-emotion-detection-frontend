import { api } from "@Api/config";
export const getService = async (url: string) => {
  const response = await api.get(`/api${url}`);
  return response.data;
};

export const getSingleService = async (url: string, id: string) => {
  const response = await api.get(`/api${url}/${id}`);
  return response.data;
};

export const patchService = async (
  url: string,
  payload: Record<string, any> | FormData
) => {
  const response = await api.patch(`/api${url}`, payload);
  return response.data;
};

export const postService = async (
  url: string,
  payload: Record<string, any> | FormData
) => {
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
