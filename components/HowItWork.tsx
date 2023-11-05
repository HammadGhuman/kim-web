import React from 'react';
import MobileCard from './MobileCard';
const num = [1, 2, 3, 4];

function HowItWork() {
  return (
    <div className='relative mt-10 flex flex-col items-center justify-center'>
      <div className='text-center'>
        <span className='text-[40px] font-medium leading-[72px] text-white md:text-[62px]'>
          Wie läuft das {'  '}
        </span>
        <span className='text-[40px] font-medium leading-[72px] text-yellow-600 md:text-[62px]'>
          Mentoring ab?
        </span>
      </div>

      {num.map((item, index) => (
        <MobileCard odd={index % 2 === 0} key={item} />
      ))}

      <div className='absolute hidden md:block'>
        <div className='relative flex h-[0px] w-[1479px] -rotate-90 border border-blue-900'>
          <div className='-mt-2 ml-44 h-[15px] w-[15px] rounded-full bg-yellow-600' />
          <div className='-mt-2 ml-[30rem] h-[15px] w-[15px] rounded-full bg-yellow-600' />
          <div className='-mt-2 ml-[28rem] h-[15px] w-[15px] rounded-full bg-yellow-600' />
          <div className='-mt-2 ml-80 h-[15px] w-[15px] rounded-full bg-yellow-600' />
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
