import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import Header from './components/header/header';
import ScrollButton from './components/scrollButton/scrollButton';
import SectionTitle from './components/sectionTitle/sectionTitle';
import { SectionTitleProvider } from './components/sectionTitle/sectionTitleContext';
import { SubtitleProvider } from './components/subtitleList/subtitleContext';

const rootDom = document.getElementById('root');
const root = createRoot(rootDom);
const CLASS_SCROLL_LOCK = 'scroll-lock';
export function unlockRoot() {
  rootDom.classList.remove(CLASS_SCROLL_LOCK);
}

rootDom.classList.add(CLASS_SCROLL_LOCK);

const Providers = ({children}) => (
  <SectionTitleProvider>
    <SubtitleProvider>
      {children}
    </SubtitleProvider>
  </SectionTitleProvider>
);

export function RootLayout (){
  

  return (
    <React.StrictMode>
      <Providers>
        <SectionTitle />
        <Header>
          <ScrollButton />
        </Header>
        <App />
      </Providers>
  </React.StrictMode>
  );
}

root.render(<RootLayout />);
