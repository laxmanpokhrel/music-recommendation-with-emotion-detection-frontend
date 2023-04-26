import { api } from "@Api/config";
export const hardDeleteService = async (url: string) => {
  const response = await api.delete(`/api/${url}`);
  return response.data;
};
