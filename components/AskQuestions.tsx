import React from 'react';
import Image from 'next/image';
import Search from '@/public/Search.png';

function AskQuestions() {
  return (
    <div className='mt-24 flex flex-col items-center justify-center font-Marsden'>
      <div className='w-[225px] text-center md:w-full'>
        <span className='text-[38px]  font-medium leading-10 text-white md:text-[62px]'>
          FAQs
        </span>
      </div>

      <div className='relative mt-12'>
        <Image
          className='absolute left-4 top-5'
          width={18}
          height={18}
          src={Search}
          alt='search'
        />
        <input
          className='h-[59px] w-[279px]  rounded-[7px] bg-[#4869a4]  bg-opacity-40 px-16  text-white lg:w-[800px] xl:w-[1000px]  md:w-[600px]'
          placeholder='Suche'
        />
      </div>
    </div>
  );
}

export default AskQuestions;
