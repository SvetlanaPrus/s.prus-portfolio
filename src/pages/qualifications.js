import React from 'react';
import IconDeveloper from '../theme/images/full-stack-developer.svg';
import IconEndorsement from '../theme/images/endorsement.svg';
import IconEducation from '../theme/images/online-education.svg';
import IconGirl from '../theme/images/profile-girl.svg';

export default function Qualification() {
  return (
    <section className="qualification">
      <div className="container">
        <p>ABOUT ME</p>
        <h2>Let`s get acquainted</h2>
        <div className="flex-container">
          <div className="block">
            <div className="wrapper-block__img">
              <img src={IconDeveloper} alt="icon" />
            </div>
            <h4>Competence:</h4>
            <ul>
              <li>HTML, CSS, SCSS, Figma</li>
              <li>jQuery, Javascript, React</li>
              <li>Bootstrap, Material UI, Ant Design</li>
            </ul>
            <p><strong>Some experience:</strong></p>
            <p>Typescript, Tailwind CSS, API, Redux, MobX ...</p>
          </div>
          <div className="block">
            <div className="wrapper-block__img">
              <img src={IconEndorsement} alt="icon" />
            </div>
            <h4>Certifications:</h4>
            <p><strong>Microsoft Azure Certified:</strong></p>
            <ul>
              <li>Fundamentals</li>
              <li>Data Fundamentals</li>
              <li>AI Fundamentals</li>
            </ul>
            <p><strong>Project Management:</strong></p>
            <ul>
              <li>PRINCE2® Foundation</li>
            </ul>
          </div>
          <div className="block">
            <div className="wrapper-block__img">
              <img src={IconEducation} alt="icon" />
            </div>
            <h4>Qualification:</h4>
            <p>
              <strong>Bachelor`s degree (5 yrs.)</strong>
              <br />
              <strong>Engineer of Information Technologies</strong>
              <br />
              * Approved by NOKUT: Bachelor`s degree 180 credits + Master`s degree 60 credits
            </p>
          </div>
          <div className="block">
            <div className="wrapper-block__img">
              <img src={IconGirl} alt="icon" />
            </div>
            <h4>Personal traits:</h4>
            <p>
              I am passionate about frontend development, love coding, and not afraid to jump
              into the unknown. A good team-player, motivated, driven and open-minded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
