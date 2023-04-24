import { fetchProjects } from "@Api/services/projects";
import Game from "@Models/game";
import { useQuery, UseQueryResult } from "react-query";

const { isLoading, data, isError, error }: UseQueryResult<Game[], Error> =
  useQuery<Game[], Error>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
      enabled: true,
    fet
  });
