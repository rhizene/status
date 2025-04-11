import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
import Header from './components/header/header';
import ScrollButton from './components/scrollButton/scrollButton';
import SectionTitle from './components/sectionTitle/sectionTitle';
import { SectionTitleContext } from './components/sectionTitle/sectionTitleContext';

const rootDom = document.getElementById('root');
const root = createRoot(rootDom);
const CLASS_SCROLL_LOCK = 'scroll-lock';
export function unlockRoot() {
  rootDom.classList.remove(CLASS_SCROLL_LOCK);
}

rootDom.classList.add(CLASS_SCROLL_LOCK);

export function RootLayout (){
  const [sectionTitle, setSectionTitle] = useState('');


  return (
    <React.StrictMode>
      <SectionTitleContext.Provider value = {[sectionTitle, setSectionTitle]}>
      <SectionTitle />
      <Header>
        <ScrollButton />
      </Header>
      <App />
      </SectionTitleContext.Provider>
  </React.StrictMode>
  );
}

root.render(<RootLayout />);
