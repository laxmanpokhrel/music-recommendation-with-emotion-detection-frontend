import ApiQuery from '@Api/_lib_/ApiQuery';
import { fetchProjects } from '@Api/services/project';
import Project from '@Models/Project';
import ProjectCard from '@Molecules/ProjectCard';
import { useMemo } from 'react';
import { useMutation } from 'react-query';
import { v4 as uuid } from 'uuid';

export default function DashboardPage() {
  const projectQuery = useMemo(() => new ApiQuery<Project>('/projects', 'projects'), []);
  const { data, isLoading, error, isError } = projectQuery.fetchData();

  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>{error.message}</h4>;

  return (
    <div className="naxatw-grid naxatw-grid-cols-4 naxatw-gap-4">
      {((data as Project[]) || [])?.map((item) => (
        <ProjectCard key={uuid()} data={item} />
      ))}
    </div>
  );
}
