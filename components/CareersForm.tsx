'use client';
import React, { useRef } from 'react';

function CareersForm() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <form className='flex flex-col'>
      <div
        id='BewerbenSiesichjetztalsPartner'
        className='items-c mx-10 mt-10 flex flex-col space-y-5 rounded-[20px] bg-[#4969a1]/40 px-10 py-10 w-[900px] md:space-x-0'
      >
        <h1 className="font-['Marsden'] text-4xl font-bold text-white">
          Hier bewerben
        </h1>
        <div className='grid grid-cols-2 gap-10'>
          {/* First Name */}
          <div className='grid grid-cols-1 gap-3'>
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
          <div className='grid grid-cols-1 gap-3'>
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
            <textarea
              name='websitelink'
              rows={10}
              className='h-[300px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
            />
          </div>

          <div className='grid grid-cols-2 gap-10'>
            <div className='col-span-2 grid grid-cols-1 gap-3'>
              <h1 className="font-['Marsden'] text-2xl font-medium text-white">
                Lebenslauf hochladen *
              </h1>
              <input
                type='file'
                name='resume'
                accept='.pdf, .doc, .docx'
                className='hidden'
                ref={fileInputRef}
              />
              <button
                type='button'
                className='rounded-[20px] bg-blue-400 bg-opacity-10 px-3 py-5 text-xl text-white'
                onClick={handleButtonClick}
              >
                Lebenslauf
              </button>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='mt-10 flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#B77828] md:mx-96 md:w-full'
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
