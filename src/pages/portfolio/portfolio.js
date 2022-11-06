import React from 'react';
import { action } from '@storybook/addon-actions';
import { Carousel } from 'react-responsive-carousel';
import { useSection } from '../../helpers/context';
import dataJson from '../../data/projects.json';
import './portfolio-carousel.scss';

export default function Portfolio() {
  // eslint-disable-next-line no-unused-vars
  const [portfolioSection, _] = useSection();
  return (
    <section className="portfolio" ref={portfolioSection}>
      <div className="container">
        <div className="portfolio-section__header">
          <p>PORTFOLIO</p>
          <h2>My first projects...</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa molestie
            faucibus consectetur ac, sit orci massa.
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
              <img src={`${el.picture}`} alt="" />
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
    </section>
  );
}
