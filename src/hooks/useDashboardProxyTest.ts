import ApiFactory from '@Api/ApiFactory';
import { Proxies } from '@Constants/Proxies';
import Project from '@Schemas/models/Project';

export default function useDashboardProxyTestFetchers() {
  const proxyOne = ApiFactory.createQuery({
    key: 'proxy-one',
    url: '/projects',
    ClassModule: Project,
    authenticated: true,
  });
  const proxyTwo = ApiFactory.createQuery({
    key: 'proxy-two',
    url: '/project/',
    proxy: Proxies.fastapi,
    authenticated: true,
  });

  return { proxyOne, proxyTwo };
}
