'use client';
import React from 'react';
import { motion } from 'framer-motion';
const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { scale: 0, y: 50 },
  visible: { scale: 1, y: 0  },
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

function AiDoesItBetter() {
  const line1 = 'Gesteigerte Führungsperformance';
  const line2 = 'durch KI.M';
  return (
    <div id='Gesteigerte' className='flex flex-col items-center justify-center'>
      <motion.div
        variants={sentence}
        initial='hidden'
        animate='visible'
        className='mt-2 text-center  md:w-auto '
      >
        {line1.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '_' + index}
              variants={letter}
              className='font-Marsden text-[36px] font-medium tracking-[-0.6px] text-white md:max-w-[938px]  md:text-[60px]  md:leading-[72px] '
            >
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '_' + index}
              variants={letter}
              className='font-Marsden text-[36px] font-medium  text-yellow-600 md:text-[62px] md:leading-[72px]'
            >
              {char}
            </motion.span>
          );
        })}

        <motion.div variants={cursor} className='inline-block h-11 w-3 animate-pulse-fast bg-yellow-600 ' />
      </motion.div>
      <div className='mt-2 w-[277px] text-justify font-Marsden text-lg font-medium  leading-snug tracking-[-4%] text-white md:w-auto md:text-center md:text-2xl md:leading-[29.64px] lg:w-[1300px]'>
        Basierend auf Künstlicher Intelligenz steht KI.m Führenden mit
        Problemlösungen und Hinweisen zur Seite. Bereits ein 10-minütiges
        Gespräch am Tag befähigt Führungskräfte dazu besser führen zu können und
        sorgt für eine optimale Weiterentwicklung ihres Führungsstiles.{' '}
      </div>
    </div>
  );
}

export default AiDoesItBetter;
