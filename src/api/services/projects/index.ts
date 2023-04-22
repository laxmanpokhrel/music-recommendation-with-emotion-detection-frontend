import { api } from "@Api/config";
export const templateRequest = async () => {
  const response = await api.get("/api/projects");
  return response.data;
};
