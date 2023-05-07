// export {};
import ApiFactory from '@Api/_lib_/ApiFactory';
import Project from '@Models/Project';
import TestProjectCard from '@Molecules/__tests__/index.test';
import { generateTestSkeleton } from '@Utils/__tests__/index.test';
export default function TestPage() {
  const apiFactory = new ApiFactory();
  const projectApi = apiFactory.creteQuery<Project>('/projects', 'projects');
  const projects = projectApi.fetchData();
  console.log('😎 - file: index.test.tsx:10 - projects:', projects);

  return <div>{generateTestSkeleton(TestProjectCard)}</div>;
}
