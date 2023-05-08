import Project from '@Models/Project';
import ProjectCard, { ProjectCardSkeleton } from '@Molecules/ProjectCard';
import { v4 as uuid } from 'uuid';
import Asynqueror from '@Molecules/Asynqueror';
import ApiFactory from '@Api/ApiFactory';

export default function Dashboardproject() {
  const apiFactory = new ApiFactory();
  const projectApi = apiFactory.creteQuery<Project>('/projects', 'projects');
  const projects = projectApi.fetchData();
  return (
    <Asynqueror watch={projects} skeleton={<DashboardprojectSkeleton />}>
      <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-2">
        {((projects.data as Project[]) || []).map((project) => (
          <ProjectCard key={uuid()} data={project} />
        ))}
      </div>
    </Asynqueror>
  );
}

function DashboardprojectSkeleton() {
  return (
    <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-2 naxatw-p-3">
      {Array.from({ length: 8 }).map((__, index) => (
        <ProjectCardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
}
