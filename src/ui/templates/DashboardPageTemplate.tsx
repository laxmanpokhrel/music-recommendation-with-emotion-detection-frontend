import CollapseButton from '@Molecules/CollapseButton';
import SidebarTab from '@Molecules/SidebarTab';
import dashboardRoutes from '@Routes/dashboardRoutes';
import generateRoutes from '@Routes/_lib_/generateRoutes';

export default function DashboardPageTemplate() {
  return (
    <div className="naxatw-flex naxatw-gap-2 naxatw-w-full naxatw-h-screen">
      <div className="sidebar naxatw-w-[20%] naxatw-border-2 naxatw-h-full naxatw-bg-red-300 naxatw-relative">
        <SidebarTab navigateTo="/dashboard" title="Dashboard" />
        <SidebarTab navigateTo="/dashboard/project" title="Projects" />
        <SidebarTab navigateTo="/dashboard/nav2" title="NAV 2" />
        <SidebarTab navigateTo="/dashboard/nav3" title="NAV 3" />
        <SidebarTab navigateTo="/dashboard/nav4" title="NAV 4" />
        <div className="collapse-btn naxatw-absolute naxatw-right-0 naxatw-translate-x-1/2 naxatw-top-0 naxatw-translate-y-1/2 ">
          <CollapseButton />
        </div>
      </div>
      <div className="playground naxatw-w-[80%] naxatw-h-screen naxatw-bg-green-200 naxatw-overflow-y-auto">
        {generateRoutes({ routes: dashboardRoutes })}
      </div>
    </div>
  );
}
