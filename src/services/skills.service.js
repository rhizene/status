import { createClient } from '@supabase/supabase-js';

const api = {
  url: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
};
const client = createClient(api.url, api.key);
const state = {
  gettingSkills: false,
};

export async function fetchSkills() {
  if (state.gettingSkills) return Promise.resolve({});

  state.gettingSkills = true;
  let { data, error } = await client
    .from('skills')
    .select('name, description')
    .neq('description', null);

  if (error) {
    ;
    throw error;
  }

  const skills = {};
  data.forEach((item) => (skills[item.name] = item.description));

  state.gettingSkills = false;
  return skills;
}
