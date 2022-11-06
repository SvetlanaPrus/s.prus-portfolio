import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

export default function Footer() {
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
    <section className="footer">
      <div className="container">
        <div className="flex-container">
          <div className="foot-left">
            <animated.a style={effect} href="#top">
              <h2>SVETLANA PRUS</h2>
            </animated.a>
            <a className="phone-block" href="tel:+4797514226">
              <div className="circle"><img src="./images/phone.svg" alt="phone" /></div>
              +47 97 51 42 26
            </a>
            <a className="mail-block" href="mailto: swetlana.prus@gmail.com">
              <div className="circle"><img src="./images/mail.svg" alt="mail" /></div>
              swetlana.prus@gmail.com
            </a>
          </div>
          <div className="foot-right">
            <p>Social media</p>
            <div className="media-block">
              <a className="facebook" href="#top">
                <div className="circle"><img src="./images/facebook.svg" alt="facebook" /></div>
              </a>
              <a className="twitter" href="#top">
                <div className="circle"><img src="./images/twitter.svg" alt="twitter" /></div>
              </a>
              <a className="instagram" href="#top">
                <div className="circle"><img src="./images/instagram.svg" alt="instagram" /></div>
              </a>
            </div>
          </div>
        </div>
        <hr className="footLine" />
        <p className="copyright">Copyright ©2022 Svetlana Prus. All Rights Reserved.</p>
      </div>
    </section>
  );
}
