'use client';
import React, { useState } from 'react';
import CookieButtonTop from '@/public/Close.svg';
import Image from 'next/image';
function CookieBanner2() {
  const [hidden, setHidden] = useState(false);
  return (
    <div className={`${hidden ? 'hidden' : 'block fixed w-screen bottom-0 z-50'}`}>
      <div className=''>
        <div className='flex flex-col justify-around border border-white border-opacity-30 bg-blue-400 bg-opacity-20 px-4  md:flex-row'>
          <div>
            <h1 className="mt-5 font-['Marsden'] text-[32px] font-semibold leading-7 text-white">
              Cookies
            </h1>{' '}
            <p className="mt-3 font-['Marsden'] text-[15px] font-normal leading-7 text-white md:w-[1207px]">
              Bei uns sind Ihre Daten sicherer als Omas Geheimrezept für Kekse.
              Wir verzichten auf das Speichern von Cookies. Weitere
              Informationen können Sie unserer Datenschutzerklärung entnehmen.
            </p>
          </div>
          <div className='flex space-x-6 py-10 md:flex-col md:items-center md:justify-center md:space-x-0'>
            <button
              onClick={() => setHidden(true)}
              className='flex h-[47px] w-[171px] items-center justify-center rounded-[5px] bg-[#b77828]
              transition-all duration-200 hover:bg-yellow-700 focus:scale-90'
            >
              <h1 className="font-['Marsden'] text-xl font-medium text-white">
                Close
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner2;
