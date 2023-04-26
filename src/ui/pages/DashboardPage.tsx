import ApiQuery from "@Api/lib/ApiQuery";
import Project from "@Models/Project";
import ProjectCard from "@Molecules/ProjectCard";
import { useMemo } from "react";
import { v4 as uuid } from "uuid";

export default function DashboardPage() {
  const projectQuery = useMemo(() => new ApiQuery<Project>("/projects"), []);
  const { data } = projectQuery.loadData({
    queryKey: ["get-project"],
  });
  return (
    <div>
      {((data as Project[]) || [])?.map((item) => (
        <ProjectCard key={uuid()} data={item} />
      ))}
      this is dashboard page
    </div>
  );
}
