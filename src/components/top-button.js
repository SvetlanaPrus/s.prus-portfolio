import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import ButtonToTop from '../theme/images/double-up.svg';

export default function BtnTop() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const listener = () => ([window.scrollY] > 600 ? setIsScroll(true) : setIsScroll(false));
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, [setIsScroll]);

  const effect = useSpring({
    opacity: isScroll ? 1 : 0,
    visibility: isScroll ? 1 : 0,
  });
  return (
    <animated.a style={effect} id="btnTop" href="#top">
      <div className="circle">
        <img src={ButtonToTop} alt="btn-top" />
      </div>
    </animated.a>
  );
}
