'use client';
import React, { useState } from 'react';
import Partner1 from '@/public/logo 1.png';
import Partner2 from '@/public/logo 2.png';
import Partner3 from '@/public/Logo 3.png';
import Partner4 from '@/public/Logo 4.png';
import Partner5 from '@/public/Logo 5.png';
import Partner6 from '@/public/logo 6.png';
import Image from 'next/image';
import Arrow from '@/public/right-arrow.png';

import Carousel from 'react-simply-carousel';
import Roadmap from '@/components/Roadmap';
function Page() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
            userSelect: 'none',
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: (
            <div className='mx-10 cursor-pointer rounded-md border-[1px] border-white bg-white/10 px-4 py-4 text-white  hover:bg-white/40 group-hover:block'>
              <Image src={Arrow} className='rotate-90' alt='arrow' width={20} />
            </div>
          ),
        }}
        backwardBtnProps={{
          children: (
            <div className='mx-10 cursor-pointer rounded-md border-[1px] border-white bg-white/10 px-4 py-4 text-white  hover:bg-white/40 group-hover:block'>
              <Image
                src={Arrow}
                className='-rotate-90'
                alt='arrow'
                width={20}
              />
            </div>
          ),
        }}
        itemsToShow={1}
        speed={400}
        centerMode
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <div key={index} className='z- mt-16 flex  flex-col space-y-10'>
            <Roadmap
              date='2009'
              title='Die Entstehung des Leadership Modells'
              description='Ausgelöst durch die Finanzkrise erforschte Jörg Krauter die Frage: „Wie führt man wirksam in Krisen und extremen Situationen in einem volatilen, unsicheren, komplexen und mehrdeutigen Geschäftsumfeld?“. In seiner Promotion zum PhD, die er in 2018 abschloss, entwickelte er die Grundlage für das Leadership Modell, das wir heute in KI.m einsetzen.'
            />
            <div className='relative hidden w-[1232px]  border-t border-stone-300 md:block '>
              <div className='absolute left-10 top-[-1.2px] h-[5px] w-6 border-t-2 border-white' />
              <div className='absolute right-10 top-[-1.2px] h-[5px] w-6 border-t-2 border-white' />
            </div>

            <div className='md:w-[700px] md:self-end'>
              <Roadmap
                date='März 2020'
                title='Corona Pandemie, die Theorie wird zu Praxis'
                description='Die Corona Pandemie wird als Extremereignis in unsere Geschichte eingehen. Diesen Umstand nutzte Jörg, um anhand einer empirischen Studie die Erkenntnisse seiner bisherigen Forschungsarbeit zu überprüfen und um aktuelle Trends, wie Digitalisierung und agiles Arbeiten zu erweitern.  '
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Page;
