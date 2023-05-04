import { useMemo } from 'react';
import ApiQuery from '@Api/_lib_/ApiQuery';
import Project from '@Models/Project';
import ProjectCard, { ProjectCardSkeleton } from '@Molecules/ProjectCard';
import { v4 as uuid } from 'uuid';
import Asynqueror from '@Molecules/Asynqueror';

export default function Dashboardproject() {
  // create an object of ApiQuery class
  const projectApi = useMemo(() => new ApiQuery<Project>('/projects', 'projects'), []);
  // execute the fetchData method to fetch the data from the server.
  const { data: projects, ...restProjectsStatus } = projectApi.fetchData();
  return (
    <Asynqueror watch={restProjectsStatus} skeleton={<DashboardprojectSkeleton />}>
      <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-2">
        {((projects as Project[]) || []).map((project) => (
          <ProjectCard key={uuid()} data={project} />
        ))}
      </div>
    </Asynqueror>
  );
}

function DashboardprojectSkeleton() {
  return (
    <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-2 naxatw-p-3">
      {Array.from({ length: 8 }).map(() => (
        <ProjectCardSkeleton />
      ))}
    </div>
  );
}
