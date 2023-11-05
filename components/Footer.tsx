import React from 'react';
import Image from 'next/image';

import Image1 from '@/public/image1.png';
import Image2 from '@/public/image2.png';
import Link from 'next/link';
import Instagram from '@/public/Subtract.svg';
import Linkedin from '@/public/Frame.svg';
function Footer() {
  return (
    <div className='mt-10 bg-[#264b78] py-16'>
      <div className='mx-16 border-y-2 border-slate-500 py-5'>
        <div className='flex items-center justify-end space-x-4'>
          <div>
            <Image src={Instagram} alt='instagram' />
          </div>
          <div>
            <Image src={Linkedin} alt='linkedin' />
          </div>
        </div>
        <div className='flex justify-around'>
          <div className='flex flex-col  flex-wrap justify-center space-y-4 py-4 md:flex-row md:space-x-16 md:space-y-0 '>
            <div className='flex flex-col justify-center -space-y-8 '>
              <h1 className='font-Marsden text-xl font-semibold leading-[72px] text-white'>
                Heim
              </h1>
              <Link
                href='/#Gesteigerte'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Gesteigerte{' '}
              </Link>
              <Link
                href='/#Wieläuft'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Wie läuft{' '}
              </Link>
              <Link
                href='/#TreffenSieunserTeam'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Treffen Sie unser Team{' '}
              </Link>
              <Link
                href='/#UnsereBlogs'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Unsere Blogs{' '}
              </Link>
            </div>

            {/* About */}
            <div className='flex flex-col justify-center -space-y-8'>
              <h1 className='font-Marsden text-xl font-semibold leading-[72px] text-white'>
                Uber KI.M
              </h1>
              <Link
                href='#'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                KI.m für Unternehmen{' '}
              </Link>
              <Link
                href='#'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Unser Angebot{' '}
              </Link>
              <Link
                href='#'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                KI.m für Führungskräfte{' '}
              </Link>
              <Link
                href='#'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Technick{' '}
              </Link>
            </div>

            {/* Partners */}
            <div className='flex flex-col justify-center -space-y-8'>
              <h1 className='font-Marsden text-xl font-semibold leading-[72px] text-white'>
                Partner Werden
              </h1>
              <Link
                href='/partners/#Vorteile'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Vorteile{' '}
              </Link>
              <Link
                href='/partners/#Partnerprogramm'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Partner programm{' '}
              </Link>
              <Link
                href='/partners/#SowerdenSiePartner'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                So werden Sie Partner{' '}
              </Link>
              <Link
                href='/partners/#BewerbenSiesichjetztalsPartner'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Bewerben Sie sich jetzt als Partner!{' '}
              </Link>
            </div>

            {/* Faqs And BLog */}
            <div className='flex flex-col  -space-y-8'>
              <h1 className='font-Marsden text-xl font-semibold leading-[72px] text-white'>
                FAQs Und Blogs
              </h1>
              <Link
                href='/ask-question/#Fragenstellen'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Fragen stellen{' '}
              </Link>
              <Link
                href='/ask-question/#BlogsundDetails'
                className='font-Marsden text-base  leading-[72px] text-white'
              >
                Blogs und Details{' '}
              </Link>
            </div>
          </div>

          {/* Impressum */}
          <div className='flex space-x-16'>
            <div className='flex flex-col space-y-2 '>
              <Link
                href='/contact'
                className="mt-14 font-['Marsden'] text-base font-medium leading-7 text-orange-400 underline"
              >
                Impressum
              </Link>
              <Link
                href='/cookie-policy'
                className="font-['Marsden'] text-base font-medium leading-7 text-orange-400 underline"
              >
                Cookies
              </Link>
              <Link
                href='/data-protection'
                className="font-['Marsden'] text-base font-medium leading-7 text-orange-400 underline"
              >
                Data Privacy
              </Link>
              <Link
                href='/terms'
                className="font-['Marsden'] text-base font-medium leading-7 text-orange-400 underline"
              >
                Term and Usage
              </Link>
            </div>

            <div className='flex flex-col space-y-5'>
              <Image src={Image1} className='mt-10' alt='img1' />
              <Image src={Image2} alt='img1' />
            </div>
          </div>
        </div>
      </div>
      <div className='mx-20 mt-3 flex flex-col justify-between md:flex-row md:items-center'>
        <p className='font-Outfit text-xs font-normal leading-7 text-white md:text-base'>
          Copyright © 2023 Ki Mentor Technology GmbH. All rights reserved.
        </p>
        <p className='font-Outfit text-xs font-normal leading-7 text-white md:text-base'>
          Designed and developed by:{' '}
          <Link href='www.codematetechnologies.com'>
            {' '}
            codematetechnologies.com{' '}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
