'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Member1 from '@/public/Member1.png';
import { motion } from 'framer-motion';

type Props = {
  img: any;
  name: string;
  position: string;
  index: number;
};

function TeamCard({ img, name, position, index }: Props) {
  return (
    <div className='flex w-[350px] flex-col items-center justify-center font-Marsden md:w-auto'>
      <div className='relative'>
        <Image
          alt='team-member'
          className='w-[180px] rounded-full lg:h-[334px] lg:w-[334px]'
          src={img}
        />
        {index === 0 && (
          <div
            style={{
              WebkitAnimation: 'circle 20s linear infinite',
              animation: 'circle 20s linear infinite',
            }}
            className='absolute bottom-0 left-0 right-0 top-0 m-auto h-4 w-4 rounded-full bg-yellow-600'
          />
        )}
        {index === 1 && (
          <div
            style={{
              WebkitAnimation: 'circle 25s linear infinite',
              animation: 'circle 25s linear infinite',
            }}
            className='absolute bottom-0 top-0 left-0 right-0 m-auto h-4 w-4 rounded-full bg-yellow-600 '
          />
        )}
        {index === 2 && (
          <div
            style={{
              WebkitAnimation: 'circle 30s linear infinite',
              animation: 'circle 30s linear infinite',
            }}
            className='absolute bottom-0 left-0 right-0 top-0 m-auto h-4 w-4 rounded-full bg-yellow-600'
          />
        )}
      </div>
      <div className='text-2xl font-medium leading-[72px] tracking-tight text-white'>
        {name}
      </div>
      <div className='-mt-3 text-xl font-medium text-stone-300'>{position}</div>
    </div>
  );
}

export default TeamCard;
