import React from 'react';

function ModalFeedback({ author, handleClick }) {
  return (
    <div className="shadow">
      <section className="comment">
        <div className="container">
          <a className="icon-cross" href="#top" onClick={handleClick}>
            <img src="./images/cross.svg" alt="" />
          </a>
          <p className="comment-author">
            {author.name}
            {' '}
            {author.surname}
            {' '}
            about me:
          </p>
          <p className="comment-title">
            {author.title}
            ,
            {' '}
            {author.company}
            {' '}
            -
            {' '}
            {author.country}
          </p>
          <p className="comment-text">
            {author.comment}
          </p>
        </div>
      </section>
    </div>
  );
}
export default ModalFeedback;
