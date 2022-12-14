import React from 'react';
import dataJson from '../data/data.json';
import Card from '../components/card';

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-section__header">
          <p>Colleagues & Project Co-workers</p>
          <p className="about-section__title animate__animated animate__fadeInDown">About me...</p>
          <p>
            “Great things in business are never done by one person; they’re done by a team of
            people.” — Steve Jobs
          </p>
        </div>
        <div className="feedback">
          <div className="feedback__flex">
            {
              dataJson.map((item) => (
                <Card author={item} key={item.id} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
