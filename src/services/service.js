import { createClient } from '@supabase/supabase-js';
const api = {
  url: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
};
const graphQLClient = createClient(api.url, api.key);
const authorizedClientQLClient = createClient(api.url, api.key, {
  auth: `Bearer ${api.key}`
});


function ServiceGenerator(client){
  /**
   * The actual service accessing the `client`.
   *
   * @callback ServiceCallback
   * @this Service
   */
  
  /**
   * 
   * @param {ServiceCallback} serviceCall
   * @param {*} defaultValue
   * @returns Service.execute
   */
  return function Service(serviceCall, defaultValue) {
    if (serviceCall === undefined) throw new Error('Service is undefined');
  
    this.isBusy = false;
    this.client = client;
    this.defaultValue = defaultValue;
  
    this.execute = () => {
      if (this.isBusy) return Promise.resolve(defaultValue);
  
      this.isBusy = true;
      return serviceCall.apply(this)
      .catch(err=>{
        const error = new Error(`API call error: ${err.message}`)
        error.stack = err;
        console.error(error);
        return defaultValue;
      })
      .finally(() => {
        this.isBusy = false;
      });
    };
  
    return this.execute;
  }

}

export default ServiceGenerator(graphQLClient);

export const AuthorizedService = ServiceGenerator(authorizedClientQLClient);
