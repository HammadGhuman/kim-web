import React from 'react';

type Props = {
  step?: number;
  heading?: string;
  description?: string;
};

function AffiliateProgram({ heading, description, step }: Props) {
  return (
    <div className='relative flex h-[166px] w-[334px] flex-col items-center space-y-5 rounded-[5px] border border-white bg-blue-400 bg-opacity-20 px-4'>
      <h1 className='mt-4 text-center text-sm font-semibold tracking-tight text-[#CD9145]'>
        {step}
      </h1>

      <h1 className='mt-4 text-center text-sm font-semibold tracking-tight text-[#CD9145]'>
        {heading}
      </h1>
      <p className='text-center text-[10px] font-normal text-white'>
        {description}
      </p>
    </div>
  );
}

export default AffiliateProgram;
