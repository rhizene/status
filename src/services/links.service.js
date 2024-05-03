import Service from './service';

export const fetchLinks = new Service(async function () {
  let { data, error } = await this.client
    .from('links')
    .select('name, link, icon')
    .order('name', { ascending: true });

  if (error) throw error;

  return data;
}, []);
