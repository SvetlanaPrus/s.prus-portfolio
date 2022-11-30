import React from 'react';
// Pay attention how to use .svg. You need to import, NOT use directly in tag <img/>
import Cross from '../theme/images/cross.svg';

function ModalFeedback({ author, handleClick }) {
  return (
    <div className="shadow">
      <section className="comment">
        <div className="button-wrapper">
          <button type="button" onClick={handleClick}>
            <img src={Cross} alt="cross" />
          </button>
        </div>
        <p className="comment-author">
          {author.name}
          {' '}
          {author.surname}
          :
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
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "...
          {' '}
          {author.comment}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "
        </p>
      </section>
    </div>
  );
}
export default ModalFeedback;
