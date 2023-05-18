import Project from '@Schemas/models/Project';
import ProjectCard, { ProjectCardSkeleton } from '@Molecules/ProjectCard';
import { v4 as uuid } from 'uuid';
import Asynqueror from '@Molecules/_lib_/Asynqueror';
import ApiFactory from '@Api/ApiFactory';

function DashboardProjectSkeleton() {
  return (
    <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-2 naxatw-p-3">
      {Array.from({ length: 8 }).map(() => (
        <ProjectCardSkeleton key={uuid()} />
      ))}
    </div>
  );
}

function Dashboardproject() {
  const projectApi = ApiFactory.createQuery({
    key: 'project',
    url: '/projects',
    ClassModule: Project,
  });
  const projects = projectApi.fetchData();

  return (
    <Asynqueror watch={projects} skeleton={<DashboardProjectSkeleton />}>
      <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-2">
        {((projects.data as Project[]) || []).map((project) => (
          <ProjectCard key={uuid()} data={project} />
        ))}
      </div>
    </Asynqueror>
  );
}
export default Dashboardproject;
