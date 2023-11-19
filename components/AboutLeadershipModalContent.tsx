import React from 'react';
import Image from 'next/image';

import LeaderShipCircle from '@/public/LeaderShipCircle.svg';

type Props = {
  step: string;
  description: string;
};

function AboutLeadershipModalContent({ step, description }: Props) {
  return (
    <div
    
      className='mt-10 flex flex-col items-center justify-center'
    >
      <div className='relative'>
        <Image src={LeaderShipCircle} alt='circle' />
        <h1 className="absolute left-12 top-8 text-center font-['Marsden'] text-5xl font-semibold leading-[84.48px] text-white">
          {step}
        </h1>
      </div>
      <div className="px-3 text-center font-['Marsden'] text-2xl font-normal leading-[47.17px] text-white md:w-[985px] md:px-0">
        {description}
      </div>
      <div className='mt-10 h-[0px] w-full border border-white border-opacity-30 md:w-[1178px]'></div>
    </div>
  );
}

export default AboutLeadershipModalContent;
