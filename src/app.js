require.context('./assets', true);
import { useEffect, useState } from 'react';
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import './app.scss';
import sound from './assets/545883_Shades-Of-James.mp3';
import DetailList from './components/detailList/detailList';
import IntroDialog from './components/introDialog/introDialog';
import MediaButton from './components/mediaButton/mediaButton';
import ProjectList from './components/projectList/projectList';
import Section from './components/section/section';
import { getProjects } from './services/projects.service';
import { fetchSkills } from './services/skills.service';

let state = {};

function updateTitleState() {
  const { titleIndex, title, incrementor } = state;

  let nextIncrementor = incrementor;
  if (titleIndex > title.length) {
    nextIncrementor = -1;
  } else if (titleIndex < 0) {
    nextIncrementor = 1;
  }

  const nextIndex = titleIndex + incrementor;
  state = {
    ...state,
    titleIndex: nextIndex,
    incrementor: nextIncrementor,
  };
}

function getAppTitle() {
  const endIndex = state.titleIndex;
  const title = state.title;
  return title.substring(0, endIndex);
}

function renderTitle() {
  document.title = getAppTitle();
  updateTitleState();
}

export default function App() {
  let [skills, setSkills] = useState({});
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    state = {
      title: 'N I C H O L ',
      titleIndex: 0,
      incrementor: 1,
    };

    (async function fetchData() {
      setSkills(await fetchSkills());
      setProjects(await getProjects());
    })();

    setInterval(() => renderTitle(), 200);
  }, []);

  return (
    <main>
      <Section
        title="About"
        description="A simple landing page converted to React."
      />
      <Section title="Skills">
        <DetailList listItems={skills}></DetailList>
      </Section>
      <Section title="Projects" description="Past projects from clients and employers">
        <ProjectList listItems={projects}></ProjectList>
      </Section>
      <MediaButton bgm={sound}></MediaButton>
      <IntroDialog></IntroDialog>
    </main>
  );
}
