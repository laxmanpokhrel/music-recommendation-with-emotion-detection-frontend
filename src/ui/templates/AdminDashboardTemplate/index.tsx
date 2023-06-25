import BindContentContainer from '@Atoms/BindContentContainer';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import adminDashboardRoutes from '@Routes/adminDashboardRoutes';

export default function AdminDashboardTemplate() {
  return (
    <BindContentContainer className="laxutw-flex ">
      <div className="dashboard-sidebar laxutw-w-[15%] laxutw-h-screen">
        <div className="sidebar laxutw-bg-white laxutw-shadow-md laxutw-h-full"> This is Admin Dashboard Sidebar</div>
      </div>
      <div className="admin-dashboard-playground laxutw-flex-1 laxutw-h-screen laxutw-overflow-y-auto scrollbar">
        {generateRoutes({ routes: adminDashboardRoutes })}
      </div>
    </BindContentContainer>
  );
}
