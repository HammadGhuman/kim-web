'use client';
import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import RedoAnim from './RedoAnim';
const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const cursor = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate='blinking'
      className='inline-block h-[50px] w-[10px] translate-y-1 bg-yellow-600'
    />
  );
}

function AiDoesItBetter() {
  const count = useMotionValue(0);
  const [done, setDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const baseText = 'Gesteigerte Führungsperformance';
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  const handleIntersection = (entries:any) => {
    entries.forEach((entry:any) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value as needed
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, baseText.length, {
        type: 'tween', // Not really needed because adding a duration will force "tween"
        duration: 3,
        ease: 'easeInOut',
        onComplete: () => {
          setDone(true);
        },
      });

      return controls.stop;
    }
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      id='Gesteigerte'
      className='flex flex-col items-center justify-center'
    >
      <span>
        {' '}
        <motion.span className='font-Marsden text-[30px] font-medium  text-white md:text-[62px] md:leading-[72px]'>
          {displayText}
        </motion.span>{' '}
        {done && (
          <>
            <br /> <RedoAnim />
          </>
        )}
        <CursorBlinker />
      </span>
      <div className='mt-2 px-4 text-justify font-Marsden text-lg font-medium  leading-snug tracking-[-4%] text-white md:w-auto md:text-center md:text-2xl md:leading-[29.64px] lg:w-[1300px]'>
        Basierend auf Künstlicher Intelligenz steht KI.m Führenden mit
        Problemlösungen und Hinweisen zur Seite. Bereits ein 10-minütiges
        Gespräch am Tag befähigt Führungskräfte dazu besser führen zu können und
        sorgt für eine optimale Weiterentwicklung ihres Führungsstiles.{' '}
      </div>
    </div>
  );
}

export default AiDoesItBetter;
