import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import Aside from './components/aside/aside';
import ScrollButton from './components/scrollButton/scrollButton';

const rootDom = document.getElementById('root');
const root = createRoot(rootDom);
const CLASS_SCROLL_LOCK = 'scroll-lock';
export function unlockRoot() {
  rootDom.classList.remove(CLASS_SCROLL_LOCK);
}

rootDom.classList.add(CLASS_SCROLL_LOCK);


root.render(
  <React.StrictMode>
    <Aside>
      <ScrollButton />
    </Aside>
    <App />
  </React.StrictMode>
);
