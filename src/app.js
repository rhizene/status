require.context('./assets', true);
import { useEffect } from 'react';
import './app.scss';
import sound from './assets/545883_Shades-Of-James.mp3';
import DetailList from './components/detailList/detailList';
import IntroDialog from './components/introDialog/introDialog';
import MediaButton from './components/mediaButton/mediaButton';
import Section from './components/section/section';

let state = {};
const skills = {
  javascript: (
    <>
      I used <em>Angular</em> and <em>Typescript</em> in my past projects.
      Recently learning React
    </>
  ),
  NodeJS: (
    <>
      As a build tool with <em>Webpack</em> or <em>Cordova</em>, or as a backend
      with frameworks like <em>ExpressJS</em>, I've used Node to create Web and
      Hybrid Mobile Apps
    </>
  ),
  Stylesheets: (
    <>
      can be pre-compiled with <em>SASS</em>, or guided with frameworks like{' '}
      <em>Bootstrap</em>.
    </>
  ),
  'Test Driven Development': (
    <>
      <em>Mocha JS</em> + <em>Chai</em>, <em>Sinon</em>
    </>
  ),
};

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
  useEffect(() => {
    state = {
      title: 'N I C H O L ',
      titleIndex: 0,
      incrementor: 1,
    };

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
      <MediaButton bgm={sound}></MediaButton>
      <IntroDialog></IntroDialog>
    </main>
  );
}
