import { api } from "@Api/config";
export const fetchProjects = async () => {
  const response = await api.get("/api/projects");
  return response.data;
};
