import { api } from "@Api/config";
export const fetchGamesRequest = async () => {
  const response = await api.get("/projects");
  return response.data;
};
