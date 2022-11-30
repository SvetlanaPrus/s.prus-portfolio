import React from 'react';
import scrollToSection from '../helpers/scrollToSection';
import { useSection } from '../helpers/context';
import Linkedin from '../theme/images/linkedin.svg';
import GitHub from '../theme/images/github.svg';
import GitLab from '../theme/images/gitlab.svg';

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

              <a target="_blank" href="https://www.linkedin.com/in/svetlanaprus/" rel="noreferrer">
                <div className="circle">
                  <img src={Linkedin} alt="linkedin" />
                </div>
              </a>
              <a target="_blank" href="https://github.com/SvetlanaPrus" rel="noreferrer">
                <div className="circle">
                  <img src={GitHub} alt="github" />
                </div>
              </a>
              <a target="_blank" href="https://gitlab.com/SvetlanaPrus" rel="noreferrer">
                <div className="circle">
                  <img src={GitLab} alt="gitlab" />
                </div>
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
