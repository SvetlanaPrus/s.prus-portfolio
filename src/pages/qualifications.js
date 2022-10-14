import React from 'react';

export default function Qualification() {
  return (
    <section className="qualification">
      <div className="container">
        <p>ABOUT ME</p>
        <h2>Let`s get acquainted</h2>
        <div className="flex-container">
          <div className="block">
            <div className="wrapper-block__img">
              <img src="./images/full-stack-developer.svg" alt="icon" />
            </div>
            <h4>Competence:</h4>
            <p>
              Proficient and have good knowledge in HTML / CSS, SCSS, Javascript and React.
              Have experience in Typescript, jQuery, Redux, Tailwind CSS, Bootstrap, Figma.
            </p>
          </div>
          <div className="block">
            <div className="wrapper-block__img">
              <img src="./images/endorsement.svg" alt="icon" />
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
              <img src="./images/online-education.svg" alt="icon" />
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
              <img src="./images/profile-girl.svg" alt="icon" />
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
