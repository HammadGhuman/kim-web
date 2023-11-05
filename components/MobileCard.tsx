import Image from 'next/image';
import React from 'react';
import Phone1 from '@/public/Phone-1.png';
import Phone2 from '@/public/Phone-2.png';
function MobileCard({ odd }: { odd: boolean }) {
  return (
    <div className='items-center justify-between md:flex md:items-start md:odd:flex-row-reverse'>
      <div>
        <div className='mt-5 flex flex-col items-center justify-center -space-y-5 md:items-start md:justify-start'>
          <div className='text-[22px] font-medium leading-[72px]  text-gray-400'>
            Phase #1{' '}
          </div>
          <div className='text-2xl font-medium leading-[72px] text-white  md:text-[32px]'>
            Rapportaufbau:{' '}
          </div>
        </div>
        <div className='mx-auto h-[68px] w-[306px] font-Marsden text-sm font-medium text-white md:h-[101px] md:w-[498px] md:leading-relaxed '>
          - Vertrauensaufbau
          <br />- Verbesserung des Mental Wellbeing mittels gezielter Übungen 1x
        </div>
      </div>
      {/* hide the bellow div if parent is even */}
      {/* display the below div if parent is odd */}
      {odd ? (
        <Image className='mt-7 md:mt-0' src={Phone1} alt={'phone2'} />
      ) : (
        <Image className='mt-7 md:mt-0' src={Phone2} alt={'phone1'} />
      )}
    </div>
  );
}

export default MobileCard;
