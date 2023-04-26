import { api } from "@Api/config";
export const postService = async (url: string, payload: JSON | FormData) => {
  const response = await api.post(`/api/${url}`, payload);
  return response.data;
};
