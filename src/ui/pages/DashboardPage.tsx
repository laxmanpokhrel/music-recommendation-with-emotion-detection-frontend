import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import DashboardPageTemplate from '@Templates/DashboardPageTemplate';

function DashboardPage() {
  return <DashboardPageTemplate />;
}
export default hasErrorBoundary(DashboardPage);
