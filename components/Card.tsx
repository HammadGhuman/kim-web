import React from 'react';
import CardBg from '@/public/Vector.svg';
import Image from 'next/image';
import CardOutline from '@/public/CardBackgroundOutline.png';
type Props = {
  title: string;
  description: string;
  image: any;
};

function Card(props: Props) {
  return (
    <div className='mt-10 flex items-center justify-center overflow-x-hidden overflow-y-hidden md:mt-0'>
      <div className='relative'>
        <div className='relative'>
          <Image
            src={CardOutline}
            alt='outline'
            className='absolute opacity-10'
          />
          <Image src={CardBg} alt='image' className='opacity-10 ' />
        </div>
        <div className='absolute left-16 top-8 scale-100 text-white md:left-20'>
          <h1 className='font-medium'>Gesteigerte Mitarbeiterbindung</h1>
          <p className='mt-5 w-[300px] pr-4 font-Marsden text-[12px] leading-relaxed text-white  md:w-[313px] md:pr-0 md:text-sm'>
            {
              'Weiterbildungen sind ein wichtiger Teil der Mitarbeiterbindung. Unser budgetfreundliches Format ermöglicht es allen Führungskräften an diesen teilzunehmen'
            }
          </p>
        </div>
        <div className='absolute left-0 top-2 flex h-14 w-14 scale-90 items-center justify-center rounded-full border-4 border-[#09b9ff]  bg-[#649FCD]  opacity-25 md:scale-100'></div>
        <div className=''>
          <Image
            className='absolute  left-4 top-[1.40rem] z-20 opacity-100'
            src={props.image}
            width={25}
            height={26}
            alt='brain'
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
