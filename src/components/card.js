import React, { useState } from 'react';
import 'animate.css';
import { useSpring, animated } from 'react-spring';
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
  // Comment: Webpack будет читать из папки public, которую указал,
  // при добавлении файлов прописывай всегда "./"
  // кладем изображения в папку public и обращаемся к ним просто по названию файла img
  // src= "sveta.jpg"

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <animated.div className="feedback feedback__card" style={styles} onClick={handleClick}>
        <div className="wrapper__img picture">
          <img src={`${author.path}`} alt="feedback" />
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
      {isOpen === true ? <ModalFeedback author={author} handleClick={handleClick} /> : null}
    </>
  );
}
export default Card;
