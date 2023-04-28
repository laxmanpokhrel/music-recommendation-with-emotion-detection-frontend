import Project from "@Models/Project";
import { useQuery, UseQueryResult } from "react-query";
import { fetchProjects } from "@Services/project";

export const getProjects = (): UseQueryResult<Project[], Error> =>
  useQuery<Project[], Error>({
    queryKey: ["get-project"],
    queryFn: fetchProjects,
  });
