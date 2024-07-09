import { AuthorizedService } from './service';


const GET_PROJECTS_DEFAULT_VALUE = [];

export const getProjects = new AuthorizedService(async function () {

  let { data:projects, error } = await this.client.functions.invoke('get-projects');

  if (error) return this.defaultValue;

  return projects;
}, GET_PROJECTS_DEFAULT_VALUE);
