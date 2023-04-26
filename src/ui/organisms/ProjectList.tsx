import { v4 as uuid } from "uuid";
import { getProjects } from "@Api/lib/projectQueries";
import ProjectCard from "@Molecules/ProjectCard";

export default function ProjectList(): JSX.Element {
  const { isLoading, data: projectsData, isError, error } = getProjects();

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>{error.message}</span>;

  return (
    <div className="projects-list naxatw-w-full naxatw-grid naxatw-grid-cols-2 naxatw-gap-3">
      {projectsData?.map((item, index) => (
        <ProjectCard data={item} key={uuid()} />
      ))}
    </div>
  );
} 
