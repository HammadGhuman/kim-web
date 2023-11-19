import React from 'react';
import Card1 from '@/public/BlogDesktop.png';
import Image from 'next/image';
type Props = {
  img?: any;
};

function BlogDetailCard({ img }: Props) {
  return (
    <div className='mt-10 flex flex-col items-center justify-center space-y-20 md:mx-20 md:space-y-10'>
      <div className='my-10 w-[225px] text-center md:w-auto'>
        <span className='text-[38px] font-medium leading-10 text-white md:text-[62px]'>
          Blog{' '}
        </span>
        <span className='text-[38px] font-medium leading-10 text-yellow-600 md:text-[62px]'>
          Details
        </span>
      </div>
      <div className='rounded-lg w-full '>
        <figure className='flex items-center justify-center'>
          <Image
            width={1101}
            height={598}
            src={`http://localhost:1337${img}`}
            alt='image'
            className='w-full md:h-[598px] md:w-[1101px] md:rounded-[48px] '
          />
        </figure>

      </div>
    </div>
  );
}

export default BlogDetailCard;
