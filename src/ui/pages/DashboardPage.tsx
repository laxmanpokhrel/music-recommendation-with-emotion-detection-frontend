import ApiQuery from "@Api/lib/ApiQuery";
import { fetchProjects } from "@Api/services/project";
import Project from "@Models/Project";
import ProjectCard from "@Molecules/ProjectCard";
import { useMemo } from "react";
import { useMutation } from "react-query";
import { v4 as uuid } from "uuid";

export default function DashboardPage() {
  const projectQuery = useMemo(
    () => new ApiQuery<Project>("/projects", "projects"),
    []
  );
  const { data } = projectQuery.loadData({
    queryKey: ["get-project"],
  });
  const postData = projectQuery.postData({})
  // const classMutation-projectQuery.postData({})
  const mutationParams = {
    mutationFn: () => fetchProjects(),
    onSuccess: () => {},
  };
  const mutation = useMutation({
    mutationFn: () => fetchProjects(),
    
    onSuccess(data, variables, context) {},
  });
  return (
    <div className="naxatw-grid naxatw-grid-cols-4 naxatw-gap-4">
      {((data as Project[]) || [])?.map((item) => (
        <ProjectCard key={uuid()} data={item} />
      ))}
      this is dashboard page
    </div>
  );
}
