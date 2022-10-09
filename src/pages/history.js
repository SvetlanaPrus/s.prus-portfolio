import React from 'react';

export default function History() {
  return (
    <section className="history">
      <div className="container">
        <div className="flex-container">
          <div className="left">
            <div className="container__image">
              <img src="./images/history.png" alt="history" />
            </div>
          </div>
          <div className="right">
            <p>CAREER</p>
            <h2>My history</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa molestie faucibus
              consectetur ac, sit orci massa. Lectus habitant leo, semper feugiat convallis
              parturient faucibus quam nunc. Amet, nam pellentesque erat quis elementum congue
              lectus aliquet dictumst. Faucibus sapien faucibus massa urna.
            </p>
            <a className="btn-arrow" href="#top">
              <div className="circle"><img src="./images/angle-right-16.png" alt="arrow" /></div>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
