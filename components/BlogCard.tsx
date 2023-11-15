import React from 'react';
import Image from 'next/image';

import Blog1 from '@/public/Blog1.png';
import ReadMoreBlog from '@/public/ReadMoreBlog.svg';
type Props = {
  img: any;
  heading: string;
  description: string;
};
function BlogCard({ img, heading, description }: Props) {
  return (
    <div className='mx-10 flex flex-col rounded-[10px] shadow-md md:mx-0 md:flex-row'>
      <Image
        className='w-full rounded-l-[10px] lg:h-[287px] lg:w-[516px]'
        src={Blog1}
        alt={'Blog 1'}
      />
      <div className='rounded-b-[10px]  rounded-t-none bg-[#214777] pl-3 pr-4 pt-8 md:h-[287px] md:rounded-l-none md:rounded-r-[10px] md:pl-12 lg:w-[516px]'>
        <h1 className=' font-Marsden text-xl font-bold leading-normal text-white md:text-2xl '>
          Leadership is reshaping itself – what are the trends?
        </h1>
        <div className=' mt-3 font-Marsden text-base font-normal leading-relaxed text-stone-300'>
          Multi-crisis scenarios, technological and social change and the ESG
          paradigm of a sustainable economy are...
        </div>
        <button className='group flex items-center space-x-3 py-3 text-white hover:text-[#b77828]'>
          <div className='text-center  font-Marsden text-base font-normal capitalize group-hover:font-medium'>
            Read More
          </div>
          <Image
            className='transition-transform duration-300 group-hover:rotate-45'
            src={ReadMoreBlog}
            alt='read more'
          />
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
/* 

<div className="flex flex-col md:flex-row md:mt-18 md:scale-125">
  <Image className="md:aspect-video lg:w-[400px]" src={Blog1} alt={"Blog 1"} />
  <div className="flex flex-col w-[265px] md:w-[479px] px-4 md:px-8 bg-[#214777]">
    <div className="w-[209px] md:w-auto text-white text-base font-bold mt-10">
      Tomorrow&apos;s leadership development today
    </div>
    <div className="w-[194px] text-white text-[8px] pt-4 font-normal">
      The megatrends of connectivity and new work as well as technological
      trends act as drivers of the digital, social and...
    </div>
    <button className="flex items-center py-3 space-x-3">
      <div className="w-[53px] text-center text-white text-[10px] font-normal  capitalize">
        Read More
      </div>
      <Image src={ReadMoreBlog} alt="read more" />
    </button>
  </div>
</div>


*/
