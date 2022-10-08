import React from 'react';
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
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
