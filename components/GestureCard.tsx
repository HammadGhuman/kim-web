import CardBg from '@/public/Vector.svg';
import Image from 'next/image';
import CardOutline from '@/public/CardBackgroundOutline.png';
import Gesture from '@/public/Gesture.svg';

function GestureCard() {
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
        <div className='absolute left-20 top-8 scale-100 text-white'>
          <h1 className='font-medium'>Gesteigerte Mitarbeiterbindung</h1>
          <p className='mt-5 pr-2 font-Marsden text-sm leading-relaxed text-white  md:w-[313px] md:pr-0 md:text-sm'>
            {
              'Weiterbildungen sind ein wichtiger Teil der Mitarbeiterbindung. Unser budgetfreundliches Format ermöglicht es allen Führungskräften an diesen teilzunehmen'
            }
          </p>
        </div>
        <div className='absolute left-0 top-2 flex h-14 w-14 scale-90 items-center justify-center rounded-full border-4 border-[#09b9ff]  bg-[#649FCD]  opacity-25 md:scale-100'></div>
        <div className=''>
          <Image
            className='absolute  left-3 top-[1.40rem] z-20 opacity-100'
            src={Gesture}
            alt='brain'
          />
        </div>
      </div>
    </div>
  );
}

export default GestureCard;
