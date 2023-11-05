import React from 'react';

function AiDoesItBetter() {
  return (
    <div id='Gesteigerte' className='flex flex-col items-center justify-center'>
      <div className='mt-2 text-center  md:w-auto '>
        <span className='font-Marsden text-[36px] font-medium tracking-[-0.6px] text-white md:max-w-[938px]  md:text-[60px]  md:leading-[72px] '>
          Gesteigerte Führungsperformance <br />
        </span>
        <span className='font-Marsden text-[36px] font-medium  text-yellow-600 md:text-[62px] md:leading-[72px] '>
          durch KI.{' '}
        </span>
        <div className='inline-block h-11 w-3 animate-pulse-fast bg-yellow-600 ' />
      </div>
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
