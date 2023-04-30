import { useMemo } from 'react';
import ApiQuery from '@Api/_lib_/ApiQuery';
import Project from '@Models/Project';
import ProjectCard from '@Molecules/ProjectCard';
import { v4 as uuid } from 'uuid';

export default function Dashboardproject() {
  const projectApi = useMemo(() => new ApiQuery<Project>('/projects', 'project'), []);
  const { data: projects } = projectApi.fetchData();
  return (
    <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-2">
      {((projects as Project[]) || []).map((project) => (
        <ProjectCard key={uuid()} data={project} />
      ))}
    </div>
  );
}
