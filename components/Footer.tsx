import React from 'react';
import Image from 'next/image';

import Image1 from '@/public/image1.png';
import Image2 from '@/public/Logo_Allianz_fuer_Cyber-Sicherheit_Teilnehmer_RGB.png';
import Link from 'next/link';
import Instagram from '@/public/Subtract.svg';
import Linkedin from '@/public/Frame.svg';
function Footer() {
  return (
    <div className='mt-10 bg-[#264b78] md:py-16 '>
      <div className='border-t-2 border-slate-500 py-5 md:border-y-2 lg:mx-2'>
        <div className='mr-10 flex items-center justify-end space-x-4'>
          <Link
            href='https://www.linkedin.com/company/ki-m/'
            className='hover:cursor-pointer'
          >
            <Image src={Linkedin} alt='instagram' />
          </Link>
          <Link
            href='https://www.instagram.com/_ki.mentor/'
            className='hover:cursor-pointer'
          >
            <Image src={Instagram} alt='linkedin' />
          </Link>
        </div>
        <div className='flex justify-between pl-5 md:justify-around md:pl-0'>
          <div className='hidden flex-col flex-wrap justify-center py-4  md:flex md:flex-row md:space-y-0 lg:space-x-0 '>
            <div className='flex flex-col justify-center -space-y-8 '>
              <h1 className='hidden font-Marsden text-xl font-semibold leading-[72px] text-white md:block'>
                Heim
              </h1>
              <Link
                href='/#Gesteigerte'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Gesteigerte{' '}
              </Link>
              <Link
                href='/#Wieläuft'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Wie läuft{' '}
              </Link>
              <Link
                href='/#TreffenSieunserTeam'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Treffen Sie unser Team{' '}
              </Link>
              <Link
                href='/#UnsereBlogs'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Unsere Blogs{' '}
              </Link>
            </div>

            {/* About */}
            <div className='flex flex-col justify-center -space-y-8'>
              <h1 className='hidden font-Marsden text-xl font-semibold leading-[72px] text-white md:block'>
                Uber KI.M
              </h1>
              <Link
                href='#'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                KI.m für Unternehmen{' '}
              </Link>
              <Link
                href='#'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Unser Angebot{' '}
              </Link>
              <Link
                href='#'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                KI.m für Führungskräfte{' '}
              </Link>
              <Link
                href='#'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Technick{' '}
              </Link>
            </div>

            {/* Partners */}
            <div className='flex flex-col justify-center -space-y-8'>
              <h1 className='hidden font-Marsden text-xl font-semibold leading-[72px] text-white md:block'>
                Partner Werden
              </h1>
              <Link
                href='/partners/#Vorteile'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Vorteile{' '}
              </Link>
              <Link
                href='/partners/#Partnerprogramm'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Partner programm{' '}
              </Link>
              <Link
                href='/partners/#SowerdenSiePartner'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                So werden Sie Partner{' '}
              </Link>
              <Link
                href='/partners/#BewerbenSiesichjetztalsPartner'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Bewerben Sie sich jetzt als Partner!{' '}
              </Link>
            </div>

            {/* Faqs And BLog */}
            <div className='flex flex-col  -space-y-8'>
              <h1 className='hidden font-Marsden text-xl font-semibold leading-[72px] text-white md:block'>
                FAQs
              </h1>
              <Link
                href='/ask-question/#Fragenstellen'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Fragen stellen{' '}
              </Link>
              <h1 className='hidden font-Marsden text-xl font-semibold leading-[72px] text-white md:block'>
                Blogs
              </h1>
              <Link
                href='/ask-question/#BlogsundDetails'
                className='mr-8 hidden font-Marsden text-[12px] leading-[72px]  text-white md:block'
              >
                Blogs und Details{' '}
              </Link>
            </div>
          </div>

          {/* Impressum */}
          <div className='-mt-16 flex space-x-16 '>
            <div className=' mt-10 grid grid-cols-2 md:flex md:flex-col md:space-y-2'>
              <Link
                href='/contact'
                className="mr-8 font-['Marsden'] text-[12px] font-medium leading-7 text-[#B77828] underline md:mt-14"
              >
                Impressum
              </Link>
              <Link
                href='/cookie-policy'
                className="mr-8 font-['Marsden'] text-[12px] font-medium leading-7 text-[#B77828] underline"
              >
                Cookies
              </Link>
              <Link
                href='/data-protection'
                className="mr-8 font-['Marsden'] text-[12px] font-medium leading-7 text-[#B77828] underline"
              >
                Data Privacy
              </Link>
              <Link
                href='/terms'
                className="mr-8 font-['Marsden'] text-[12px] font-medium leading-7 text-[#B77828] underline"
              >
                Term and Usage
              </Link>
            </div>

            <div className='mt-12 hidden flex-col space-y-5 md:flex'>
              <Link href='https://ki-verband.de/'>
                <Image src={Image1} className='mt-10' alt='img1' />
              </Link>
              <Link href='https://www.allianz-fuer-cybersicherheit.de/Webs/ACS/DE/Home/home_node.html'>
                <Image className='h-[93px] w-[253px]' src={Image2} alt='img1' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3 flex flex-col justify-between border-b-2 border-slate-500 px-6 pb-4  md:mx-20 md:flex-row md:items-center md:border-b-0 md:px-0 md:pb-0'>
        <p className='font-Outfit mr-8 text-center text-xs font-normal leading-7 text-white md:text-[12px]'>
          Copyright © 2023 Ki Mentor Technology GmbH. All rights reserved.
        </p>
        <p className='font-Outfit text-center text-[10px] font-normal leading-7 text-yellow-600 md:mr-8 md:text-[12px]  md:text-white'>
          Designed and developed by:{' '}
          <Link href='https://www.codematetechnologies.com'>
            {' '}
            codematetechnologies.com{' '}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
