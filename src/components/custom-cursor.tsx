'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e: any) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power3.out',
      });
    };

    const growCursor = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: '#fff',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const shrinkCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const addHoverListeners = () => {
      const hoverTargets = document.querySelectorAll('[data-cursor="hover"]');
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', growCursor);
        el.addEventListener('mouseleave', shrinkCursor);
      });
    };

    window.addEventListener('mousemove', moveCursor);
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('[data-cursor="hover"]').forEach((el) => {
        el.removeEventListener('mouseenter', growCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>

      <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border: 2px solid #000;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: background-color 0.3s, transform 0.3s;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
