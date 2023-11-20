'use client';
import React, { useState } from 'react';
import CookieButtonTop from '@/public/Close.svg';
import Image from 'next/image';
import ModalContent from './ModalContent';
function CookieBanner() {
  const modalContent = [
    {
      title: 'Unbedingt erforderliche Cookies',
      description:
        'Diese Cookies werden für grundlegende Funktionen wie Sicherheit, Identitätsprüfung und Netzwerkmanagement benötigt. Sie können daher nicht deaktiviert werden.',
    },
    {
      title: 'Cookies für Marketingzwecke',
      description:
        'Cookies für Marketingzwecke werden verwendet, um die Effektivität von Werbung zu messen, Interessen von Besuchern zu erfassen und Werbeanzeigen an deren persönliche Bedürfnisse anzupassen.',
    },
    {
      title: 'Funktionale Cookies',
      description:
        'Funktionale Cookies werden verwendet, um bereits getätigte Angaben zu speichern und darauf basierend verbesserte und personalisierte Funktionen anzubieten.',
    },
    {
      title: 'Analytics-Cookies',
    },
  ];
  const [hidden, setHidden] = useState(false);
  return (
    <div className={`${hidden ? 'hidden' : 'block'}`}>
      <div className=''>
        <button
          onClick={() => setHidden(true)}
          className='flex h-[54.19px] w-[252px] items-center justify-center rounded-r-xl bg-[#b77828]
     px-3 transition-all duration-200 hover:bg-yellow-700 focus:scale-90'
        >
          <h1 className="mr-3 text-center font-['Marsden'] text-base font-medium leading-[72px] text-white">
            Cookie-Einstellungen
          </h1>
          <Image className='mt-1' src={CookieButtonTop} alt='close' />
        </button>
        <div className='flex flex-col justify-around border border-white border-opacity-30 bg-blue-400 bg-opacity-20 px-4 md:h-[185px] md:flex-row'>
          <div>
            <h1 className="mt-10 font-['Marsden'] text-[32px] font-semibold leading-7 text-white">
              Cookies
            </h1>{' '}
            <p className="mt-3 font-['Marsden'] text-[15px] font-normal leading-7 text-white md:w-[1207px]">
              We’d like to collect data from your device while you use this
              website. This helps give you the best experience, keeps your
              account secure and supports personalised marketing on our website
              and social media. Choose ‘Accept all’ to agree we can collect your
              data in this way, or for more options choose ‘Preferences’. Find
              out more: cookie policy
            </p>
          </div>
          <div className='flex space-x-6 py-10 md:flex-col md:items-center md:justify-between md:space-x-0'>
            <button
              //@ts-ignore
              onClick={() => document.getElementById('my_modal_3').showModal()}
              className='duration  300 flex h-[47px] w-[171px] items-center justify-center rounded-[5px] border border-white transition-all hover:border-[#b77828] hover:bg-[#b77828] focus:scale-90'
            >
              {' '}
              <h1 className="font-['Marsden'] text-xl font-medium text-white">
                Preferences
              </h1>
            </button>
            <button
              onClick={() => setHidden(true)}
              className='flex h-[47px] w-[171px] items-center justify-center rounded-[5px] bg-[#b77828]
              transition-all duration-200 hover:bg-yellow-700 focus:scale-90'
            >
              <h1 className="font-['Marsden'] text-xl font-medium text-white">
                Accept All
              </h1>
            </button>
          </div>
        </div>
      </div>
      <dialog id='my_modal_3' className='modal '>
        <div className='modal-box rounded  bg-image bg-cover bg-no-repeat md:min-w-[1200px]'>
          <form method='dialog'>
            <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <div className='flex flex-col'>
            <h1 className="text-start font-['Marsden'] md:text-[42px] font-medium leading-[72px] text-yellow-600">
              Erweiterte Cookie-Einstellungen
            </h1>
            {modalContent.map((item) => (
              <ModalContent
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CookieBanner;
