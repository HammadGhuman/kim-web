'use client';
import Image from 'next/image';
import React, { useRef } from 'react';

import Partner1 from '@/public/logo 1.png';
import Partner2 from '@/public/logo 2.png';
import Partner3 from '@/public/Logo 3.png';
import Partner4 from '@/public/Logo 4.png';
import Partner5 from '@/public/Logo 5.png';
import Partner6 from '@/public/logo 6.png';
import Partner7 from '@/public/Partner7.png';
import { useRouter } from 'next/navigation';

function OurPartners2() {
  const router = useRouter();

  return (
    <div className='mt-12 md:mt-0 w-screen overflow-hidden '>
      <div className='text-center md:hidden '>
        <span className='text-4xl font-medium leading-[44px]  tracking-wide text-white'>
          Unsere
        </span>
        <span className='text-4xl font-medium leading-[44px]  tracking-wide text-yellow-600'>
          Partner
        </span>
      </div>

      <div className='relative mt-10 flex flex-col items-center justify-between space-y-10 md:flex-row md:justify-between md:space-y-0 md:bg-[#263A64] md:pr-10'>
        <div
          onClick={() => router.push('/partners')}
          className='absolute z-10 hidden h-[200px] min-w-[450px] cursor-pointer bg-[#263a64] md:block md:pl-10'
        >
          <div className='flex h-full items-center justify-center'>
            <span className="mr-3 font-['Marsden'] text-4xl font-medium leading-[44px] tracking-wide text-white">
              Unsere{' '}
            </span>
            <span className="font-['Marsden'] text-4xl font-medium leading-[44px] tracking-wide text-[#CD9145] ">
              {' '}
              Partner
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 md:hidden'>
          <Image
            className='mx-10 inline-block w-44 '
            src={Partner1}
            alt='partner1'
          />
          <Image
            className='mx-10 inline-block w-44 '
            src={Partner2}
            alt='partner1'
          />
          <Image
            className='mx-10 inline-block w-44 '
            src={Partner3}
            alt='partner1'
          />
          <Image
            className='mx-10 inline-block w-44 '
            src={Partner4}
            alt='partner1'
          />
          <Image
            className='mx-10 inline-block w-44 '
            src={Partner5}
            alt='partner1'
          />
          <Image
            className='mx-10 inline-block w-44 '
            src={Partner6}
            alt='partner1'
          />
          <Image
            className='mx-10 inline-block w-44 '
            src={Partner7}
            alt='partner1'
          />
        </div>

        <div id='logos' className='hidden py-4 md:block'>
          <div id='logo-slide' className=' whitespace-nowrap'>
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner1}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner2}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner3}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner4}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner5}
              alt='partner1'
            />

            <Image
              className='mx-10 inline-block w-44 '
              src={Partner6}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block  w-44  '
              src={Partner7}
              alt='partner1'
            />

            <Image
              className='mx-10 inline-block w-44 '
              src={Partner1}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner2}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner3}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner4}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner5}
              alt='partner1'
            />

            <Image
              className='mx-10 inline-block w-44 '
              src={Partner6}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block  w-44  '
              src={Partner7}
              alt='partner1'
            />

            <Image
              className='mx-10 inline-block w-44 '
              src={Partner1}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner2}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner3}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner4}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner5}
              alt='partner1'
            />

            <Image
              className='mx-10 inline-block w-44 '
              src={Partner6}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block  w-44  '
              src={Partner7}
              alt='partner1'
            />

            <Image
              className='mx-10 inline-block w-44 '
              src={Partner1}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner2}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner3}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner4}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block w-44 '
              src={Partner5}
              alt='partner1'
            />

            <Image
              className='mx-10 inline-block w-44 '
              src={Partner6}
              alt='partner1'
            />
            <Image
              className='mx-10 inline-block  w-44  '
              src={Partner7}
              alt='partner1'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartners2;
