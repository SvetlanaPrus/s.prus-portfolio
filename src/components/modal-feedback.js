import React from 'react';

function ModalFeedback({ author, handleClick }) {
  return (
    <div className="shadow">
      <section className="comment">
        <div className="container">
          <div className="icon-block">
            <a className="icon-cross" href="#top" onClick={handleClick}>
              <img src="./images/cross.svg" alt="" />
            </a>
          </div>
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
            {author.extra
              ? (
                <>
                  <br />
                  {author.extra}
                </>
              )
              : null}
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
