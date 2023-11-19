import React from 'react';
import LeaderShipCircle from '@/public/LeaderShip.svg';
import Image from 'next/image';

function LeaderShipDial() {
  return (
    <div className='relative ml-10 mt-20 hidden md:block'>
      <div className='relative'>
        <Image width={600} src={LeaderShipCircle} alt='LeaderShip' />
        <div className='absolute left-[22%] top-[33%] text-center font-Marsden text-[44px] leading-[44px] font-medium text-white'>
          <h1 className='text-yellow-600'>COMPLEXITY</h1>
          <h1>LEADERSHIP</h1>
          <h1>APPROACH</h1>
        </div>
      </div>
      <div className='absolute -left-[6rem] top-[5rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>PSYCHOLOGY</h1>
      </div>
      <div className='absolute -left-[3.75rem] top-[8.5rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>STRESS</h1>
      </div>
      <div className='absolute -left-[8rem] top-[12rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>INFLUENCE</h1>
      </div>
      <div className='absolute -left-[5rem] top-[15.5rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>POWER</h1>
      </div>
      <div className='absolute -left-[5.75rem] top-[19rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>CAPITAL</h1>
      </div>
      <div className='absolute -left-[7.5rem] top-[22rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>HIERARCHY</h1>
      </div>
      <div className='absolute -left-[2rem] top-[25rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>ETHICS</h1>
      </div>
      <div className='absolute left-[2rem] top-[28rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>TIME</h1>
      </div>

      {/* right side  */}

      <div className='absolute -right-[3rem] top-[5rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>PERSONALITY</h1>
      </div>
      <div className='absolute -right-[6.5rem] top-[8.5rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>SELF EFFICACY</h1>
      </div>
      <div className='absolute -right-[1rem] top-[12rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>POWER</h1>
      </div>
      <div className='absolute -right-[4.5rem] top-[15.5rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>TEAMWORK</h1>
      </div>
      <div className='absolute -right-[2.25rem] top-[19rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>CULTURE</h1>
      </div>
      <div className='absolute -right-[2.25rem] top-[22rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>BEHAVIOR</h1>
      </div>
      <div className='absolute -right-[2.5rem] top-[25rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>BASIC NEEDS</h1>
      </div>
      <div className='absolute -right-[0.5rem] top-[28rem] text-2xl font-semibold text-[#70819E] transition-all duration-150 hover:scale-125 hover:cursor-pointer hover:text-white'>
        <h1>WILLINGNESS</h1>
      </div>
    </div>
  );
}

export default LeaderShipDial;
