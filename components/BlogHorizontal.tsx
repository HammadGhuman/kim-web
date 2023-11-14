import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  img: any;
};

function BlogHorizontal({ title, description, img }: Props) {
  return (
    <div className='mt-10 flex w-full rounded-[10px] bg-[#4b6aa3] bg-opacity-40 px-10 py-10'>
      {/* left side */}
      <div className='flex flex-col px-3 py-4'>
        {/* date  */}
        {/* <div className="w-[83.02px] h-[37.81px] pl-[15px] pr-4 pt-[6.90px] pb-[7.91px] bg-gradient-to-bl from-yellow-600 to-yellow-600 rounded-lg justify-center items-center inline-flex">
          <h1 className="text-white text-sm font-normal font-['Marsden'] capitalize leading-[22.82px] tracking-wide">
            31 MAY
          </h1>
        </div> */}
        {/* title and description */}
        <h1 className="-mt-3 w-[479px] font-['Marsden'] text-2xl font-bold leading-[1.5] text-white">
          {title}
        </h1>

        <h2 className="mt-4 w-[446px] font-['Marsden'] text-base font-normal leading-relaxed text-white">
          {description}
          
        </h2>
      </div>
      {/* right side image */}
      <div className=''>
        <Image
          width={483}
          height={332}
          className='rounded-[10px]'
          src={`http://localhost:1337${img}`}
          alt='blog-image'
        />
      </div>
    </div>
  );
}

export default BlogHorizontal;
