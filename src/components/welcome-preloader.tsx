'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import greetings from '../data/greetings';

const Preloader = ({ onComplete }: any) => {
  const wordRef = useRef(null);
  const langRef = useRef(null);
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delay = 0.05; // Fast time-lapse speed
    const tl = gsap.timeline();

    for (let i = 0; i < greetings.length; i++) {
      tl.to([wordRef.current, langRef.current], {
        opacity: 0,
        duration: 0.06,
        onComplete: () => setCurrent(i),
      });
      tl.to([wordRef.current, langRef.current], {
        opacity: 1,
        duration: 0.06,
      });
      tl.to({}, { duration: delay });
    }

    // Exit animation
    tl.to(containerRef.current, {
      y: '-100%',
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete,
    }).call(onComplete);
  }, [onComplete]);

  const { word, language, font } = greetings[current % greetings.length];

  return (
    <div className="preloader" ref={containerRef}>
      <div className="text-container">
        <div className="word" ref={wordRef} style={{ fontFamily: `'${font}', sans-serif` }}>
          {word}
        </div>
        <div className="language" ref={langRef} style={{ fontFamily: `'${font}', sans-serif` }}>
          — {language}
        </div>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          z-index: 9999;
          background: black;
          color: white;
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: sans-serif;
        }

        .text-container {
          text-align: center;
        }

        .word {
          font-size: 3.5rem;
          font-weight: bold;
        }

        .language {
          font-size: 1.25rem;
          margin-top: 0.5rem;
          color: #aaa;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
