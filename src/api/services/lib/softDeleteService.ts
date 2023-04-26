import { api } from "@Api/config";
export const softDeleteService = async (
  url: string,
  payload: JSON | FormData
) => {
  const response = await api.patch(`/api/${url}`, payload);
  return response.data;
};
