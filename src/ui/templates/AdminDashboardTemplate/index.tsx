import BindContentContainer from '@Atoms/BindContentContainer';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import adminDashboardRoutes from '@Routes/adminDashboardRoutes';

export default function AdminDashboardTemplate() {
  return (
    <BindContentContainer className="flex ">
      <div className="dashboard-sidebar w-[15%] h-screen">
        <div className="sidebar bg-white shadow-md h-full"> This is Admin Dashboard Sidebar</div>
      </div>
      <div className="admin-dashboard-playground flex-1 h-screen overflow-y-auto scrollbar">
        {generateRoutes({ routes: adminDashboardRoutes })}
      </div>
    </BindContentContainer>
  );
}
