import React, { useState } from 'react';
import PicHistory from '../theme/images/history.jpg';
import MyCV from '../theme/images/CV.pdf';
import ArrowRight from '../theme/images/angle-right-16.png';
import Data from '../data/history.json';

export default function History() {
  const [hidden, setHidden] = useState(true);

  return (
    <section className="history">
      <div className="container">
        <div className="story">
          <div className="story-flex">
            <div className="left">
              <div className="container__image">
                <img src={PicHistory} alt="history" />
              </div>
            </div>
            <div className="right">
              <p>CAREER</p>
              <h2>My history</h2>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
              jsx-a11y/no-static-element-interactions */}
              <div onClick={() => setHidden(!hidden)}>
                {hidden
                  ? (
                    <p id="text">
                      {Data.text.substring(0, 200)}
                      <b> ...Read more</b>
                    </p>
                  )
                  : (
                    <p id="text">
                      {Data.text}
                      <b> ...Close</b>
                    </p>
                  )}
              </div>
              <a className="btn-arrow" href={MyCV} target="_blank" rel="noopener noreferrer">
                <div className="circle"><img src={ArrowRight} alt="arrow" /></div>
                Download CV
                <br />
                (Last updated: November 2022)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
