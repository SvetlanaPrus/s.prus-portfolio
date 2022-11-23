import React from 'react';
import scrollToSection from '../helpers/scrollToSection';
import { useSection } from '../helpers/context';
import Facebook from '../theme/images/facebook.svg';
import Twitter from '../theme/images/twitter.svg';
import Instagram from '../theme/images/instagram.svg';

export default function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const [_, contactSection] = useSection();
  return (
    <section className="navigation">
      <div className="container">
        <div className="bar">
          <div className="bar-flex">
            <p>SVETLANA PRUS</p>
            <div className="media-block">
              <a className="facebook" href="#top">
                <div className="circle"><img src={Facebook} alt="facebook" /></div>
              </a>
              <a className="twitter" href="#top">
                <div className="circle"><img src={Twitter} alt="twitter" /></div>
              </a>
              <a className="instagram" href="#top">
                <div className="circle"><img src={Instagram} alt="instagram" /></div>
              </a>
              <button onClick={() => scrollToSection(contactSection)} type="button">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
