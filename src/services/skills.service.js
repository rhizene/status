import Service from './service';

export const fetchSkills = new Service(async function () {
  let { data, error } = await this.client
    .from('skills')
    .select('name, description')
    .neq('description', null);

  if (error) throw error;

  const skills = {};
  data.forEach((item) => (skills[item.name] = item.description));

  return skills;
}, {});
