import React from 'react';
import ReadMoreButton from './ReadMoreButton';
import Arrow from '@/public/arrowWhite.svg';
import Image from 'next/image';

function Reply() {
  return (
    <form
      // action="https://formsubmit.co/Christian.Krauter@ki-mentor.com"
      action='https://formsubmit.co/ghumanhammad420@gmail.com'
      method='POST'
      className='flex flex-col'
    >
      <div
        id='BewerbenSiesichjetztalsPartner'
        className='items-c mx-10 mt-10 flex w-[1100px] flex-col space-y-5 rounded-[20px] bg-[#4969a1]/40 px-10 py-10 md:space-x-0'
      >
        <h1 className="font-['Marsden'] text-4xl font-bold text-white">
          Kontaktperson
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

          <div className="col-span-2 font-['Marsden'] text-[32px] font-medium text-white">
            Firmendaten (optional)
          </div>
          {/* Company Name */}
          <div className='grid grid-cols-1 gap-3 '>
            <h1 className="font-['Marsden'] text-2xl font-medium text-white">
              Unternehmensname
            </h1>
            <input
              type='text'
              name='company_name'
              className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
            />
          </div>

          {/* Legal Form */}
          <div className='relative grid grid-cols-1 gap-3'>
            <h1 className="font-['Marsden'] text-2xl font-medium text-white">
              Rechtsform{' '}
            </h1>
            <Image  className='absolute rotate-90 right-5 top-16' width={20} height={20} src={Arrow} alt='arrow' />
            <select
              name='legalfrom'
              className='h-[72px] appearance-none rounded-[20px] bg-blue-400 bg-opacity-10 px-10 text-xl text-white'
            >
              <option
                className='bg-blue-400/90 text-white'
                value='option1'
              ></option>
              <option className='bg-blue-400/90 text-white' value='option1'>
                AG
              </option>
              <option className='bg-blue-400/90 text-white' value='option2'>
                BV & Co.KG
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                e.K.
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                Einzelunternehmer ohne Handesregistereintrag
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                GbR
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                GmbH
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                GmbH & Co.KG
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                GmbH & Co.KgaA
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                KG
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                KgaA
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                OHG
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                SE
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                UG (haftungsbeschrankt)
              </option>
              <option className='bg-blue-400/90 text-white' value='option3'>
                Sonstige
              </option>
            </select>
          </div>

          {/* Description of Company */}

          <div className='col-span-2 grid grid-cols-1 gap-3'>
            <h1 className="font-['Marsden'] text-2xl font-medium text-white">
              Beschreibung des Unternehmens
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
              Link zur Webseite
            </h1>
            <input
              type='text'
              name='websitelink'
              className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button
          type='submit'
          className='mt-10 flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#B77828] md:mx-96'
        >
          <div className='text-center text-xl font-medium text-white'>
            {'Absenden'}
          </div>
        </button>
      </div>
    </form>
  );
}

export default Reply;
