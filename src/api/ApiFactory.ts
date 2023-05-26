import { Proxies } from '@Constants/Proxies';
import Query from './_lib_/Query';

interface ICreateQueryProps<T> {
  url: string;
  key: string;
  proxy?: Proxies;
  ClassModule?: T;
  authenticated?: boolean;
}

class ApiFactory {
  static cache: Map<string, Query<any>> = new Map();

  /**
   *
   * @param url path name from where the data has to be fetched
   * @param key Unique key that will be used to identify the requests
   * @param proxy which proxy to use? By default it will use "/api" proxy
   * @param ClassModule The class model to which the response data belongs to so that data is received along with the methods specified on that model class.
   * @returns Unique `Query` object
   */
  static createQuery<T>({ url, key, ClassModule, proxy = Proxies.api, authenticated = false }: ICreateQueryProps<T>) {
    const indentifier = `${key}-${proxy}-${url}-${
      ClassModule ? `with-class-module-${ClassModule.toString()}` : 'without-class-module'
    }`;
    let query = ApiFactory.cache.get(indentifier);
    if (!query) {
      query = ClassModule
        ? new Query<T>(authenticated, url, key, proxy, ClassModule)
        : new Query<T>(authenticated, url, key, proxy);
      ApiFactory.cache.set(indentifier, query);
    }
    return query;
  }
}
export default ApiFactory;
