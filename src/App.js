import React from 'react';
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

function App() {
  const pages = [
    { id: 100, page: <Home /> },
    { id: 200, page: <Qualification /> },
    { id: 300, page: <History /> },
    { id: 400, page: <Portfolio /> },
    { id: 500, page: <About /> },
    { id: 600, page: <Contact /> },
    { id: 700, page: <Footer /> },
  ];
  const scrollIntertia = 70;
  return (
    <>
      <NavBar />
      <ScrollContainer scrollIntertia={scrollIntertia}>
        <PagesContent content={pages} />
      </ScrollContainer>
    </>
  );
}

export default App;
