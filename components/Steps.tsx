import React from 'react';
import Check1 from '@/public/check 1.png';
import Image, { StaticImageData } from 'next/image';

type Props = {
  step: string;
  instruction: string;
  image: StaticImageData;
};
function Steps(props: Props) {
  return (
    <>
      <div className='rounded-full border-2 border-white p-5'>
        <Image width={75} height={75} src={props.image} alt='step1' />
      </div>
      <div className='mt-10 text-center text-5xl font-extrabold text-orange-400'>
        {props.step}
      </div>
      <div className='w-[302px] text-center text-[26px] font-medium text-white '>
        {props.instruction}
        <br />
      </div>
    </>
  );
}

export default Steps;
