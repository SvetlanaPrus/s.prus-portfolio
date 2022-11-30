import React from 'react';
import { action } from '@storybook/addon-actions';
import { Carousel } from 'react-responsive-carousel';
import { useSection } from '../../helpers/context';
import dataJson from '../../data/projects.json';
import './portfolio-carousel.scss';
import getProjectPicture from '../../helpers/getProjectPicture';

export default function Portfolio() {
  // eslint-disable-next-line no-unused-vars
  const [portfolioSection, _] = useSection();
  return (
    <section className="portfolio" ref={portfolioSection}>
      <div className="container">
        <div className="file">
          <div className="portfolio-section__header">
            <p>PORTFOLIO</p>
            <h2>My first projects...</h2>
            <p>
              {/* «Love what you do. Do what you love» */}
              “The journey of a thousand miles begins with one step.” — Lao Tzu
            </p>
          </div>
          <Carousel
            showArrows
            onClickThumb={action('click thumb')}
            onClickItem={action('click item')}
            onChange={action('change')}
          >
            {dataJson.map((el) => (
              <div key="el.id">
                {getProjectPicture(el.id)}
                <p className="legend">
                  <p><strong>{el.name}</strong></p>
                  <p>
                    <strong>
                      Link:
                      {' '}
                    </strong>
                    <a href={el.link}>{el.link}</a>
                  </p>
                  <br />
                  <ul>
                    <li>
                      <strong>Tech Stack:</strong>
                      {' '}
                      {el['tech-stack']}
                    </li>
                    <li>
                      <strong>Description & target:</strong>
                      {' '}
                      {el.description}
                    </li>
                  </ul>
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
