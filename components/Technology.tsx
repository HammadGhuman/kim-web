import React from 'react';
import Image, { StaticImageData } from 'next/image';
type Props = {
  text: string;
  img: StaticImageData;
};

function Technology({ text, img }: Props) {
  return (
    <div className='mt-10 flex pt-[35px] md:w-[1068px] mx-2 flex-col items-center justify-center rounded-[5px] border border-white bg-blue-400 bg-opacity-20 md:pb-[29px] md:pl-[108px] md:pr-[109px] px-5 pb-4 '>
      <Image width={65} height={65} src={img} alt='tech' />
      <div className="mt-3 md:w-[851px] text-center font-['Marsden'] text-[28px]  font-medium leading-[49.28px] text-white">
        {text}
      </div>
    </div>
  );
}

export default Technology;
