// import ApiFactory from '@Api/ApiFactory';
// import Proxies from '@Constants/Proxies';
// import ApiFactory from '@Api/ApiFactory';
// import Proxies from '@Constants/Proxies';
import Asynqueror from '@Molecules/_lib_/Asynqueror';
import Project from '@Schemas/models/Project';
import useDashboardProxyTestFetchers from '@Hooks/useDashboardProxyTest';

function DashboardProxyTest() {
  // const proxyOne = ApiFactory.createQuery({
  //   key: 'proxy-one',
  //   url: '/projects',
  //   ClassModule: Project,
  // });
  // const proxyTwo = ApiFactory.createQuery({
  //   key: 'proxy-two',
  //   url: '/project',
  //   proxy: Proxies.fastapi,
  // });

  const { proxyOne, proxyTwo } = useDashboardProxyTestFetchers();
  const proxyOneData = proxyOne.fetchData();
  const proxyTwoData = proxyTwo.fetchPaginatedleData({ params: { page: 2, limit: 4 } });

  return (
    <div className="naxatw-flex naxatw-gap-1">
      <Asynqueror watch={proxyOneData}>
        <div className="naxatw-p-4 naxatw-flex naxatw-gap-2 naxatw-flex-col naxatw-border-b-2 naxatw-bg-yellow-400">
          <h1 className="naxatw-text-3xl">From Proxy One</h1>
          {((proxyOneData.data as Project[]) || []).map((item) => (
            <h2 key={item.title} className="naxatw-text-sm naxatw-text-gray-700">
              {item.title}
            </h2>
          ))}
        </div>
      </Asynqueror>
      <Asynqueror watch={proxyTwoData}>
        <div className="naxatw-p-4 naxatw-flex naxatw-gap-2 naxatw-flex-col naxatw-border-b-2 naxatw-bg-green-400">
          <h1 className="naxatw-text-3xl">From Proxy Two</h1>
          {(proxyTwoData.data || []).map((item: any) => (
            <h2 key={item.project_name} className="naxatw-text-sm naxatw-text-gray-700">
              {item.project_name}
            </h2>
          ))}
        </div>
      </Asynqueror>
    </div>
  );
}
export default DashboardProxyTest;
