import React from 'react';

export default function NavBar() {
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
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
