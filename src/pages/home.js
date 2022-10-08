import React from 'react';

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home-flex">
          <div className="block-txt">
            <p>1.5+ years experience</p>
            <h1>Build dream</h1>
            <a className="btn-arrow" href="#top">
              <div className="circle"><img src="./images/angle-right-16.png" alt="arrow" /></div>
              See projects
            </a>
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
