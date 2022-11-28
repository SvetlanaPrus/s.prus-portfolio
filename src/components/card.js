import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import getAuthorPicture from '../helpers/getAuthorPicture';
import ModalFeedback from './modal-feedback';

let increment = 0;

function Card({ author }) {
  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: increment += 250,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <animated.div className="feedback feedback__card" style={styles} onClick={handleClick}>
        <div className="wrapper__img picture">
          {getAuthorPicture(author.name)}
          <div className="card-overlay" />
        </div>
        <div className="feedback__text">
          <p className="feedback__name">
            {author.name}
            {' '}
            {author.surname}
          </p>
          <p className="feedback__title">
            {author.title}
            ,
            {' '}
            {author.company}
            {' '}
            -
            {' '}
            {author.country}
          </p>
        </div>
      </animated.div>
      {isOpen === true ? (
        <ModalFeedback
          author={author}
          handleClick={handleClick}
        />
      )
        : null}
    </>
  );
}
export default Card;
