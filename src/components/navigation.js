import React from 'react';
import scrollToSection from '../helpers/scrollToSection';
import { useSection } from '../helpers/context';
// import { Link } from 'react-router-dom';

export default function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const [_, contactSection] = useSection();
  return (
    <section className="navigation">
      <div className="container">
        <div className="flex-container">
          <p>SVETLANA PRUS</p>
          <div className="media-block">
            <a className="facebook" href="#top">
              <div className="circle"><img src="./images/facebook.svg" alt="facebook" /></div>
            </a>
            <a className="twitter" href="#top">
              <div className="circle"><img src="./images/twitter.svg" alt="twitter" /></div>
            </a>
            <a className="instagram" href="#top">
              <div className="circle"><img src="./images/instagram.svg" alt="instagram" /></div>
            </a>
            <button onClick={() => scrollToSection(contactSection)} type="button">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
