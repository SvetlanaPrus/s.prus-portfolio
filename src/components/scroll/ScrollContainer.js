import React, {
  useLayoutEffect,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react';
import { useSpring, animated as a } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill';

function ScrollContainer({ children, scrollIntertia }) {
  const [{ y }, set] = useSpring(() => ({
    y: [0],
    config: {
      mass: 1,
      tension: 200,
      friction: scrollIntertia,
      precision: 0.00001,
      velocity: 0,
      clamp: true,
    },
  }));

  const viewportRef = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);

  const getCurrentHeight = useCallback((entries) => {
    entries.forEach((entry) => {
      const crx = entry.contentRect;
      setCurrentHeight(crx.height);
    });
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const ro = new ResizeObserver((entries) => getCurrentHeight(entries));
    ro.observe(viewport);
    // eslint-disable-next-line consistent-return
    return () => {
      if (!ro) return;
      ro.disconnect();
    };
  }, [getCurrentHeight]);

  useEffect(() => {
    const handleScroll = () => set({ y: [-window.scrollY] });
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [set]);
  return (
    <>
      <a.div
        style={{ transform: y.to((y) => `translate3d( 0, ${y}px, 0)`) }}
        ref={viewportRef}
        className="scroll-container"
      >
        {children}
      </a.div>
      <div style={{ height: currentHeight }} />
    </>
  );
}

export default ScrollContainer;
