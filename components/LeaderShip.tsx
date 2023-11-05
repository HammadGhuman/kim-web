import React from 'react';
import Image from 'next/image';

import LeaderShipMobile from '@/public/leadership mobile.png';
import LeaderShipDesktop from '@/public/leadershipweb.png';
import ReadMoreButton from './ReadMoreButton';
function LeaderShip() {
  return (
    <div className='mt-24 flex flex-col items-center justify-center font-Marsden md:mt-[130px]'>
      <div className='md:text-62px text-center'>
        <span className='text-4xl font-medium leading-[72px] text-white  md:text-[62px]'>
          KI.m Leadership Model
        </span>
      </div>
      <div className='text-md h-[87px] w-[327px] text-center font-medium leading-tight text-white md:mb-6 md:mt-3 md:w-auto md:text-2xl lg:w-[1227px]'>
        Ermöglicht Führungskräften einzigartige Einblicke in ihr eigenes
        Führungsverhalten und in die Dynamiken in der Zusammenarbeit mit ihren
        Teammitgliedern zu gewinnen. Das Modell betrachtet mehr als 43 einzelne
        Indikatoren, die die Führung beeinflussen und den Rahmen für das
        Mentoring bilden.
      </div>

      <div className='md:hidden '>
        <Image
          className='mt-10'
          width={567}
          height={308}
          src={LeaderShipMobile}
          alt='leadership'
        />
      </div>
      <div className='-mt-10 hidden md:block'>
        <Image
          width={1200}
          height={755}
          src={LeaderShipDesktop}
          alt='leadership'
        />
      </div>
      <div className='md:ml-16'>
        <ReadMoreButton text='Mehr' />
      </div>
    </div>
  );
}

export default LeaderShip;
