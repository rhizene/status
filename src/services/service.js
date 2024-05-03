import { createClient } from '@supabase/supabase-js';
const api = {
  url: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
};
const client = createClient(api.url, api.key);


/**
 * 
 * @param {Function} serviceCall 
 * @param {*} defaultValue 
 * @returns Service.execute
 */
export default function Service(serviceCall, defaultValue){
    if(serviceCall === undefined) throw new Error("Service is undefined");

    this.isBusy = false
    this.client = client;

    this.execute = () => {
        if(this.isBusy) return Promise.resolve(defaultValue);
        
        this.isBusy = true;
        return serviceCall.apply(this)
            .finally(()=>{
                this.isBusy = false;
            });
    }

    return this.execute;
}
