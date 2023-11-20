import React from 'react';

function Page() {
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='mt-20 w-[201px] text-center md:w-auto'>
        <span className='font-Marsden text-[32px] font-semibold leading-10 text-white md:text-[62px]'>
          Impressum &{' '}
        </span>
        <span className='font-Marsden text-[32px] font-semibold leading-10 text-[#CD9246] md:text-[62px]'>
          Kontakt
          <br />
        </span>
      </div>

      <div className='mt-10 w-[243px] text-center font-Marsden text-2xl font-semibold leading-[59.04px] text-[#CD9246] md:w-auto md:text-[32px]'>
        Unternehmen
        <br />
      </div>

      <div className=' w-[202px] text-center font-Marsden text-2xl font-medium text-white md:w-[805px]'>
        KI Mentor Technology GmbH Amtsgericht Mannheim HRB 744712
        Geschäftsführer: Christian Krauter
      </div>

      <div className='mt-10 w-[243px] text-center font-Marsden text-2xl font-semibold leading-[59.04px] text-[#CD9246] md:w-auto md:text-[32px]'>
        Adresse
        <br />
      </div>

      <div className='w-[203px]  text-center font-Marsden text-2xl font-medium text-white md:w-auto'>
        Wachtelstraße 4 75245 Neulingen
      </div>

      <div className='mt-10 w-[243px] text-center font-Marsden text-2xl font-semibold leading-[59.04px] text-[#CD9246] md:text-[32px]'>
        Telefon
        <br />
      </div>
      <div className='w-[203px] text-center font-Marsden text-2xl font-medium text-white md:w-auto'>
        +49 176 60415870
      </div>

      <div className='mt-10 w-[243px] text-center font-Marsden text-2xl font-semibold leading-[59.04px] text-[#CD9246] md:text-[32px]'>
        Email
        <br />
      </div>
      <div className='w-[203px] text-center font-Marsden text-2xl font-medium text-white md:w-auto'>
        email
      </div>

      <div className='mt-20 w-[201px] text-center md:w-auto'>
        <span className='font-Marsden text-[32px] font-medium leading-[42px] text-white md:text-[62px]'>
          Kontakt{' '}
        </span>
        <span className='font-Marsden text-[32px]   font-medium leading-[42px] text-[#CD9246] md:text-[62px]'>
          aufnehmen
        </span>
      </div>

      <form className='mx-5 mt-16  gap-5 md:grid md:grid-cols-2'>
        <div className='col-span-2 flex flex-col text-xl text-white md:col-span-1'>
          <label htmlFor='vorname' className='mb-3'>
            Vorname*
          </label>
          <input
            id='vorname'
            className='w-[425px] rounded-lg bg-white/10 px-3 py-5 outline-none'
            type='text'
          />
        </div>

        <div className='col-span-2 flex flex-col text-xl text-white md:col-span-1'>
          <label htmlFor='Nachname' className='mb-3'>
            Nachname*
          </label>
          <input
            id='Nachname'
            className='w-[425px] rounded-lg bg-white/10 px-3 py-5 outline-none'
            type='text'
          />
        </div>

        <div className='col-span-2 flex flex-col text-xl text-white md:col-span-1'>
          <label htmlFor='Unternehmen' className='mb-3'>
            Unternehmen*
          </label>
          <input
            id='Unternehmen'
            className='w-[425px] rounded-lg bg-white/10 px-3 py-5 outline-none'
            type='text'
          />
        </div>

        <div className='col-span-2 flex flex-col text-xl text-white md:col-span-1'>
          <label htmlFor='E-Mail-Adresse' className='mb-3'>
            E-Mail-Adresse*
          </label>
          <input
            id='E-Mail-Adresse'
            className='w-[425px] rounded-lg bg-white/10 px-3 py-5 outline-none'
            type='text'
          />
        </div>

        <div className='col-span-2 flex w-full flex-col text-xl text-white'>
          <label htmlFor='Nachricht schreiben' className='mb-3'>
            Nachricht schreiben*
          </label>
          <textarea
            id='Nachricht schreiben'
            className=' rounded-lg bg-white/10 px-3 py-5 outline-none'
          />
        </div>

        <button className='mt-4 flex h-[61px] w-[225px] items-center justify-center rounded-[10px]  bg-[#B77828]'>
          <div className='font-Marsden text-xl font-medium text-white'>
            Absenden
          </div>
        </button>
      </form>
    </div>
  );
}

export default Page;
