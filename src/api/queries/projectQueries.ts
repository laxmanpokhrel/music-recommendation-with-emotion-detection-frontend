import useCustomQuery from "@Hooks/useCustomQuery";
import Project from "@Models/Project";
import { useQuery, UseQueryResult } from "react-query";
import { fetchProjects } from "@Services/projects";

export const getProjects = (): UseQueryResult<Project[], Error> =>
  useQuery<Project[], Error>({
    queryKey: ["get-project"],
    queryFn: fetchProjects,
  });
