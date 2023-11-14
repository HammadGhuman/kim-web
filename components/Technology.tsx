import React from 'react';
import Image, { StaticImageData } from 'next/image';
type Props = {
  text: string;
  img: StaticImageData;
};

function Technology({ text, img }: Props) {
  return (
    <div className='mt-10 flex pt-[35px] w-[1068px] flex-col items-center justify-center rounded-[5px] border border-white bg-blue-400 bg-opacity-20 pb-[29px] pl-[108px] pr-[109px] '>
      <Image width={65} height={65} src={img} alt='tech' />
      <div className="mt-3 w-[851px] text-center font-['Marsden'] text-[28px] font-medium leading-[49.28px] text-white">
        {text}
      </div>
    </div>
  );
}

export default Technology;
