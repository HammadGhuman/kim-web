'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import Logo from '@/public/MobileLogo.png';
import Hamburger from '@/public/Hamburger.svg';
import Arrow from '@/public/arrow.svg';
import CLose from '@/public/icons8-close.svg';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex items-center justify-between px-5 py-10 font-Marsden'>
      <div
        className='block hover:cursor-pointer md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={CLose}
          alt='close'
          className={`transition duration-300 ease-in-out ${
            isOpen ? 'block opacity-100' : 'hidden opacity-0'
          }`}
        />

        <Image
          src={Hamburger}
          alt='hamburger'
          className={`transition duration-300 ease-in-out ${
            isOpen ? 'hidden opacity-0' : 'block opacity-100'
          }`}
        />
      </div>
      <Link href='/' className='ml-10'>
        <Image src={Logo} alt='Logo' />
      </Link>
      <ul
        className={`absolute top-28 z-10 w-full items-center   justify-between space-y-10 bg-image bg-cover bg-no-repeat py-10 text-lg md:static md:z-auto md:ml-20  md:flex md:h-auto md:w-auto md:space-x-28 md:space-y-0 md:bg-none md:py-0 md:opacity-100 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } transition-all duration-300 ease-in-out`}
      >
        <li className='text-white  transition-all duration-300 hover:text-[#B77828] '>
          <Link href='/about-kim'>Über KI.m</Link>
        </li>
        <li className='text-white  transition-all duration-300 hover:text-[#B77828] '>
          <Link href='/partners'>Partner werden</Link>
        </li>
        <li className='text-white  transition-all duration-300 hover:text-[#B77828] '>
          <Link href='/meet-our-team'>Über Uns</Link>
        </li>
        <li className='text-white  transition-all duration-300 hover:text-[#B77828] '>
          <Link href='/faqs'>FAQs</Link>
        </li>
        <li className='text-white  transition-all duration-300 hover:text-[#B77828] '>
          <Link href='/ask-question'>Blogs</Link>
        </li>
        <li className=' md:hidden'>
          <div className='flex items-center justify-center space-x-5'>
            <button className='flex items-center justify-center space-x-3 rounded-lg border-2 border-white px-1 py-1 text-white transition-colors duration-300 hover:border-[#B77828] hover:bg-[#B77828]'>
              <span className='px-7 text-center text-lg text-white'>Login</span>
            </button>
            <button className='flex items-center justify-center  space-x-3 rounded-lg bg-[#B77828] px-1 py-1 text-white'>
              <span className='pl-3 text-center'>Jetzt kaufen!</span>
              <div className='flex h-8 w-8 items-center justify-center rounded-md bg-white'>
                <Image src={Arrow} alt='arrow' />
              </div>
            </button>
          </div>
        </li>
      </ul>
      <div className='hidden items-center justify-center space-x-5 md:flex text-lg'>
        <button className='flex items-center justify-center space-x-3 rounded-lg border-2 border-white px-1 py-1 text-white transition-colors duration-300 hover:border-[#B77828] hover:bg-[#B77828]'>
          <span className='px-7 text-center text-lg text-white'>Login</span>
        </button>
        <button className='flex items-center justify-center space-x-3 rounded-lg bg-[#B77828] px-1 py-1 text-white'>
          <span className='pl-3 text-center'>Jetzt kaufen!</span>
          <div className='flex h-8 w-8 items-center justify-center rounded-md bg-white'>
            <Image src={Arrow} alt='arrow' />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
