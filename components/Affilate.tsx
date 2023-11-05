import React from 'react';

type Props = {
  heading?: string;
  description?: string;
};

function Affiliate({ heading, description }: Props) {
  return (
    <div className='flex h-[166px] w-[334px] flex-col items-center justify-center space-y-5 rounded-[5px] border border-white bg-blue-400 bg-opacity-10 px-4 md:h-[815px] md:w-auto md:px-24 md:py-10'>
      <div className="text-center font-['Marsden'] text-sm font-semibold tracking-tight  text-[#cd9146] md:w-[697px] md:text-[40px] md:leading-[60px]">
        {heading}
      </div>
      <div className="text-center font-['Marsden'] text-[10px] font-normal leading-[19px] tracking-tight text-white md:w-[851px] md:text-[32px] md:leading-[49px]">
        {description}
      </div>
    </div>
  );
}

export default Affiliate;
