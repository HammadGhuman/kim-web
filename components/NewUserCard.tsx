'use client';
import React from 'react';
import Image from 'next/image';
import Person1 from '@/public/UserImage.png';

type Props = {
  img: any;
  authorName: string;
  authorDes: string;
};

function NewUserCard({ img, authorName, authorDes }: Props) {
  console.log(`http://localhost:1337${img}`);
  return (
    <div className='flex items-center justify-between space-x-4'>
      <div className='mx-12 mt-10 flex flex-col md:flex-row space-x-3 rounded-[20px] bg-white/10 py-4 pl-8 pr-5 font-Marsden md:mx-auto'>
        <div className='rounded flex items-center justify-center'>
          <Image
            className=' rounded-full h-[171px] w-[164px]'
            src={`http://localhost:1337${img}`}
            width={171}
            height={164}
            alt='image'
          />
        </div>
        <div className='flex max-w-xl  flex-col md:items-start items-center justify-center space-y-2 text-white'>
          <h1 className='font-bold md:text-2xl'>{authorName}</h1>
          <p>{authorDes}</p>
        </div>
      </div>
    </div>
  );
}

export default NewUserCard;
