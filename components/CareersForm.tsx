'use client';
import React, { useRef } from 'react';

function CareersForm() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    //@ts-ignore
    fileInputRef.current.click();
  };
  return (
    <form className='flex flex-col'>
      <div
        id='BewerbenSiesichjetztalsPartner'
        className='items-c mx-10 mt-10 flex flex-col space-y-5 rounded-[20px] bg-[#4969a1]/40 px-10 py-10 md:w-[900px] md:space-x-0'
      >
        <h1 className="font-['Marsden'] text-4xl font-bold text-white">
          Hier bewerben
        </h1>
        <div className='grid grid-cols-2 gap-10'>
          {/* First Name */}
          <div className='col-span-2 grid grid-cols-1 gap-3  md:col-span-1'>
            <h1 className="font-['Marsden'] text-2xl font-medium text-white">
              Vorname *
            </h1>
            <input
              type='text'
              name='vorname'
              className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl  text-white'
            />
          </div>
          {/* Last Name */}
          <div className='col-span-2 grid grid-cols-1 gap-3 md:col-span-1'>
            <h1 className="font-['Marsden'] text-2xl font-medium text-white">
              Nachname *
            </h1>
            <input
              type='text'
              name='nachname'
              className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl  text-white'
            />
          </div>

          {/* Email */}
          <div className='col-span-2 grid grid-cols-1 gap-3'>
            <h1 className="font-['Marsden'] text-2xl font-medium text-white">
              E-Mail-Adresse *
            </h1>
            <input
              type='email'
              name='email'
              className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
            />
          </div>

          {/* Description of Company */}

          <div className='col-span-2 grid grid-cols-1 gap-3'>
            <h1 className="font-['Marsden'] text-2xl font-medium text-white">
              Anschrift (Straße PLZ und Wohnort)
            </h1>
            <input
              type='text'
              name='companydescription'
              className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
            />
          </div>

          {/* Link to Website */}
          <div className='col-span-2 grid grid-cols-1 gap-3'>
            <h1 className="font-['Marsden'] text-2xl font-medium text-white">
              Motivationsschreiben
            </h1>
            <p className='text-white'>
              Bei uns stehen nicht deine Noten und Zertifikate im Vordergrund,
              sondern deine Persönlichkeit und Motivation. In nur wenigen Sätzen
              möchten wir von dir erfahren, was dich dazu bewegt, dich bei uns
              zu bewerben. Was bringt dich dazu, morgens voller Vorfreude auf
              die Arbeit zu gehen? Welche Herausforderungen möchtest du
              gemeinsam mit uns meistern? Warum bist du das fehlende Puzzleteil,
              das unser Team komplett macht?
            </p>
            <textarea
              name='websitelink'
              rows={10}
              className='h-[300px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
            />
          </div>
        </div>
        <button
          type='submit'
          className='mt-10 flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#b77828]
          transition-all duration-200 hover:bg-yellow-700 focus:scale-90 md:mx-96 md:w-full'
        >
          <div className='text-center text-xl font-medium text-white'>
            {'Einreichen'}
          </div>
        </button>
      </div>
    </form>
  );
}

export default CareersForm;
