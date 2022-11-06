import React from 'react';
import scrollToSection from '../helpers/scrollToSection';
import { useSection } from '../helpers/context';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [portfolioSection, _] = useSection();
  return (
    <section className="home">
      <div className="container">
        <div className="home-flex">
          <div className="block-txt">
            <p>1.5+ years experience</p>
            <h1>Build dream</h1>
            <div className="btn-arrow">
              <button className="circle" onClick={() => scrollToSection(portfolioSection)} type="button">
                <img src="./images/angle-right-16.png" alt="arrow" />
              </button>
              See projects
            </div>
          </div>
          <div className="banner-flex">
            <div className="block-banner">
              <img src="./images/banner.jpg" alt="banner" />
              <div className="banner-txt">
                <p>LAST PROJECT</p>
                <p>Own CV-site development</p>
                <div className="banner-txt-footer">
                  <div className="flex-container">
                    <h6>Oslo, Norway</h6>
                    <h6>October 2022</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
