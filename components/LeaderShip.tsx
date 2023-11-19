import React from 'react';
import Image from 'next/image';

import LeaderShipMobile from '@/public/leadership mobile.png';
import LeaderShipDesktop from '@/public/leadershipweb.png';
import ReadMoreButton from './ReadMoreButton';
import LeaderShipDial from './LeaderShipDial';
import Link from 'next/link';
function LeaderShip() {
  return (
    <div className='mt-24 flex flex-col items-center justify-center font-Marsden md:mt-[130px]'>
      <div className='md:text-62px text-center'>
        <span className='text-4xl font-medium leading-[72px] text-white  md:text-[62px]'>
          KI.m Leadership <span className='text-yellow-600'> Model</span>
        </span>
      </div>
      <div className='text-md w-[327px] text-center font-medium leading-tight text-white md:mb-6 md:mt-3 md:h-[87px] md:w-auto md:text-2xl lg:w-[1227px]'>
        Ermöglicht Führungskräften einzigartige Einblicke in ihr eigenes
        Führungsverhalten und in die Dynamiken in der Zusammenarbeit mit ihren
        Teammitgliedern zu gewinnen. Das Modell betrachtet mehr als 43 einzelne
        Indikatoren, die die Führung beeinflussen und den Rahmen für das
        Mentoring bilden.
      </div>
      <LeaderShipDial />
      <Link href='/about-kim/#leadership-model' className='md:-mt-10 mt-5 mb-20 z-20'>
        <ReadMoreButton text='Mehr' />
      </Link>
    </div>
  );
}

export default LeaderShip;
