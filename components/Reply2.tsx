import React from 'react';
import ReadMoreButton from './ReadMoreButton';

function Reply2() {
  return (
    <div className='items-c mx-10 mt-10 flex flex-col space-y-5 rounded-[20px] bg-blue-300/10 px-10 py-10 md:mx-96 md:space-x-0'>
      <h1 className="font-['Marsden'] text-4xl font-bold text-white">
        Leave a reply
      </h1>
      <h1 className="-mt-3 font-['Marsden'] text-base font-medium text-white ">
        Your email will not be published.
      </h1>
      <div className='grid grid-cols-2 gap-10'>
        {/* First Name */}
        <div className='grid grid-cols-1 md:col-span-1 col-span-2 gap-3'>
          <h1 className="font-['Marsden'] text-2xl font-medium text-white">
            Vorname *
          </h1>
          <input
            type='text'
            className='h-[72px] md:w-[425px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
          />
        </div>

        {/* Email */}
        <div className='grid grid-cols-1 md:col-span-1 col-span-2  gap-3'>
          <h1 className="font-['Marsden'] text-2xl font-medium text-white">
            E-Mail-Adresse *
          </h1>
          <input
            type='email'
            className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
          />
        </div>
        {/* Link to Website */}
        <div className='grid grid-cols-1 md:col-span-1 col-span-2  gap-3'>
          <h1 className="font-['Marsden'] text-2xl font-medium text-white">
            Website
          </h1>
          <input
            type='email'
            className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
          />
        </div>
        {/* Company Name */}
        <div className='grid grid-cols-1 md:col-span-1 col-span-2  gap-3 '>
          <h1 className="font-['Marsden'] text-2xl font-medium text-white">
            Company Name
          </h1>
          <input
            type='email'
            className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
          />
        </div>
        {/* Message */}
        <div className='col-span-2 row-span-2 grid grid-cols-1 gap-3'>
          <h1 className="font-['Marsden'] text-2xl font-medium text-white">
            Message *
          </h1>
          <textarea
            className='h-[72px] rounded-[20px] bg-blue-400 bg-opacity-10 px-3 text-xl text-white'
            cols={30}
            rows={10}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Reply2;
