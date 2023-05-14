import Query from './_lib_/Query';

class ApiFactory {
  static cache: Map<string, Query<any>> = new Map();

  /**
   *
   * @param url path name from where the data has to be fetched
   * @param key Unique key that will be used to identify the requests
   * @param ClassModule The class model to which the response data belongs to so that data is received along with the methods specified on that model class.
   * @returns Unique `Query` object
   */
  createQuery<T>(url: string, key: string, ClassModule?: T) {
    const indentifier = `${url}-${key}-${ClassModule ? 'with-class-module' : 'without-class-module'}`;
    let query = ApiFactory.cache.get(indentifier);
    if (!query) {
      query = ClassModule ? new Query<T>(url, key, ClassModule) : new Query<T>(url, key);
      ApiFactory.cache.set(indentifier, query);
    }
    return query;
  }
}
export default ApiFactory;
