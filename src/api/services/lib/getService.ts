import { api } from "@Api/config";
export const getService = async (url: string) => {
  const response = await api.get(`/api/${url}`);
  return response.data;
};
