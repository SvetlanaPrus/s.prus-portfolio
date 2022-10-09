import React from 'react';
import { Fancybox } from '@fancyapps/ui';
import './portfolio-fancybox.scss';
import dataJson from '../../data/projects.json';

export default function Portfolio() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    animated: false,
    showClass: false,
    hideClass: false,

    closeButton: 'top',
    dragToClose: false,

    Image: {
      zoom: false,
      fit: 'cover',
    },

    Toolbar: false,
    Thumbs: false,

    Carousel: {
      Navigation: false,
      Dots: true,
    },

    on: {
      initLayout: (fancybox) => {
        const $mainPanel = document.createElement('div');
        $mainPanel.classList.add('fancybox__main-panel');

        const $leftPanel = document.createElement('div');
        $leftPanel.classList.add('fancybox__left-panel');

        const mapdata = dataJson.map((project) => (
          <div key={project.id} id="gallery-data" className="hidden">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.link}</p>
          </div>
        ));

        $leftPanel.innerHTML = String(mapdata);
        $mainPanel.appendChild($leftPanel);
        $mainPanel.appendChild(fancybox.$carousel);
        fancybox.$backdrop.after($mainPanel);
      },
    },
  });
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio-section__header">
          <p>PORTFOLIO</p>
          <h2>Find out about my possibilities</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa molestie
            faucibus consectetur ac, sit orci massa.
          </p>
        </div>
        <div className="portfolio-section__body">
          <div className="gallery-wrap">
            {dataJson.map((project) => (
              <a key={project.id} className="wrapper__img" data-fancybox="gallery" href={`${project.picture}`}>
                <img src={`${project.picture}`} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
