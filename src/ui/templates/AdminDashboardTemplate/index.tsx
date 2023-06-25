import BindContentContainer from '@Atoms/BindContentContainer';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import adminDashboardRoutes from '@Routes/adminDashboardRoutes';

export default function AdminDashboardTemplate() {
  return (
    <BindContentContainer className="naxatw-flex ">
      <div className="dashboard-sidebar naxatw-w-[15%] naxatw-h-screen">
        <div className="sidebar naxatw-bg-white naxatw-shadow-md naxatw-h-full"> This is Admin Dashboard Sidebar</div>
      </div>
      <div className="admin-dashboard-playground naxatw-flex-1 naxatw-h-screen naxatw-overflow-y-auto scrollbar">
        {generateRoutes({ routes: adminDashboardRoutes })}
      </div>
    </BindContentContainer>
  );
}
