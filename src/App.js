import React, { useMemo, useRef } from 'react';
import BtnTop from './components/top-button';
import ScrollContainer from './components/scroll/ScrollContainer';
import PagesContent from './components/scroll/PagesContent';
import Portfolio from './pages/portfolio/portfolio';
import History from './pages/history';
import Qualification from './pages/qualifications';
import Footer from './pages/footer';
import Contact from './pages/contact';
import About from './pages/about';
import NavBar from './components/navigation';
import Home from './pages/home';
import { SectionContext } from './helpers/context';

function App() {
  const pages = [
    { id: 100, name: 'home', page: <Home /> },
    { id: 200, name: 'qualification', page: <Qualification /> },
    { id: 300, name: 'history', page: <History /> },
    { id: 400, name: 'portfolio', page: <Portfolio /> },
    { id: 500, name: 'about', page: <About /> },
    { id: 600, name: 'contact', page: <Contact /> },
    { id: 700, name: 'footer', page: <Footer /> },
  ];
  const scrollIntertia = 70;

  const portfolioSection = useRef(null);
  const contactSection = useRef(null);
  const value = useMemo(() => [portfolioSection, contactSection], null);

  return (
    <SectionContext.Provider value={value}>
      <NavBar />
      <BtnTop />
      <ScrollContainer scrollIntertia={scrollIntertia}>
        <PagesContent content={pages} />
      </ScrollContainer>
    </SectionContext.Provider>
  );
}

export default App;
