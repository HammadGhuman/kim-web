import Image from 'next/image';
import React from 'react';
import Member1 from '@/public/Member1.png';

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
          <div className='absolute -left-2 md:left-3 top-20 h-4 w-4 rounded-full bg-yellow-600' />
        )}
        {index === 1 && (
          <div className='absolute -right-1 md:right-5 top-16 h-4 w-4 rounded-full bg-yellow-600' />
        )}
        {index === 2 && (
          <div className='absolute bottom-20 -right-2 md:right-3 h-4 w-4 rounded-full bg-yellow-600' />
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
