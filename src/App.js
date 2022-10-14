import React from 'react';
import Portfolio from './pages/portfolio/portfolio';
import History from './pages/history';
import Qualification from './pages/qualifications';
import Footer from './pages/footer';
import Contact from './pages/contact';
import About from './pages/about';
import NavBar from './components/navigation';
import Home from './pages/home';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Qualification />
      <History />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
