import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: any;
};

function Blogs(props: Props) {
  return (
    <div className='mt-5 flex w-72 flex-col rounded-lg bg-[#4b6aa3] bg-opacity-40 p-3'>
      <div className='flex items-center justify-center'>
        <Image width={300} height={200} src={props.image} alt='card' />
      </div>

      <div className='ml-4 mt-4 flex items-center space-x-5 text-white'></div>
      <div className='ml-4 mt-2'>
        <p className='font-Marsden text-xs font-bold leading-normal text-white'>
          Leadership is reshaping itself – what are the trends?
        </p>
      </div>
      <div className='ml-4'>
        <p className='mt-4 font-Marsden text-xs font-normal leading-relaxed  text-white'>
          Multi-crisis scenarios, technological and social change and the ESG
          paradigm of a sustainable economy are...
        </p>
      </div>
    </div>
  );
}

export default Blogs;
