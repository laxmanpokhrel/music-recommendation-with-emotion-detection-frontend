import SidebarTab from '@Molecules/SidebarTab';
import ApiQuery from '@Api/_lib_/ApiQuery';
import Project from '@Models/Project';
export default function DashboardSidebar() {
  const projectsApi = new ApiQuery<Project>('/projects', 'projects');
  const { isLoading, data: projectData, error, isError } = projectsApi.fetchData();
  return (
    <div>
      {((projectData as Project[]) || [])?.map((item) => (
        <SidebarTab title={item.title} iconName="cases" />
      ))}
    </div>
  );
}
