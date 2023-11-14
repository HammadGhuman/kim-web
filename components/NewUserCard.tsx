'use client';
import React from 'react';
import Image from 'next/image';
import Person1 from '@/public/UserImage.png';

type Props = {
  img: any;
  authorName: string;
};

function NewUserCard({ img, authorName }: Props) {
  console.log(`http://localhost:1337${img}`);
  return (
    <div className='flex items-center justify-between'>
      <div className='mx-12 mt-10 flex flex-row space-x-3 rounded-[20px] bg-white/10 py-4 pl-8 pr-5 font-Marsden md:mx-auto'>
        <div className='rounded- block'>
          <Image
            className='h-[65px] w-[63px] rounded-full md:h-[171px] md:w-[164px]'
            src={`http://localhost:1337${img}`}
            width={171}
            height={164}
            alt='image'
          />
        </div>
        <div className='flex max-w-xl flex-col items-start justify-center space-y-2 text-white'>
          <h1 className='text-[10px] font-bold md:text-2xl'>written by</h1>
          <h1 className='text-[10px] font-bold md:text-2xl'>
            {authorName}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NewUserCard;
