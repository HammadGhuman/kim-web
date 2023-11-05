import React from 'react';
import Image from 'next/image';
import Person1 from '@/public/UserImage.png';
function NewUserCard() {
  return (
    <div className='flex items-center justify-between '>
      <div className='mx-12 mt-10 flex flex-row space-x-3 rounded-[20px] bg-white/10 py-4 pl-8 pr-5 font-Marsden md:mx-[28rem]'>
        <div className=''>
          <Image
            className='h-[65px] w-[63px] md:h-[171px] md:w-[164px] '
            src={Person1}
            alt='image'
          />
        </div>
        <div className='flex max-w-xl flex-col items-start justify-center space-y-2 text-white'>
          <h1 className='text-[10px] font-bold md:text-2xl'>
            Christian Krauter
          </h1>
          <p className='min-w-[600px] text-[8px] font-medium md:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor
            repudiandae laboriosam blanditiis officia porro expedita a odio
            necessitatibus eaque.
          </p>
          <div className='flex flex-row space-x-3 '>
            <span className="font-['Readex Pro']  h-[9px] w-[30px] text-center text-[8px] font-normal capitalize text-white md:h-auto md:w-auto md:text-base">
              31. May
            </span>{' '}
            <span className="font-['Readex Pro']  h-2 w-[77px] text-center text-[8px] font-normal capitalize text-white md:h-auto md:w-auto md:text-base">
              4 min reading time
            </span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUserCard;
