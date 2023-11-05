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
      <div className='w-96 rounded-lg bg-white/10 md:w-full md:bg-transparent'>
        <figure className='flex items-center justify-center'>
          <Image
            width={1101}
            height={598}
            src={img}
            alt='image'
            className='w-[350px] md:h-[598px] md:w-[1101px] md:rounded-[48px] '
          />
        </figure>
        <div className='md:hidden'>
          <div className='font-light-text-sm -mb-5 mt-4 flex flex-row items-center justify-center space-x-7 pl-8 text-white'>
            <span>31 May</span>
            <span>65 Views</span>
            <span>0 Comments</span>
          </div>
          <div className='card-body -mt-2 flex flex-col items-center justify-center text-center text-white'>
            <h2 className='font-bold'>
              Tomorrow&apos;s leadership development today
            </h2>
            <p className='max-w-sm leading-9'>
              The megatrends of connectivity and new work as well as
              technological trends act as drivers of the digital, social and...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailCard;
