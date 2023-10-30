import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  img: any;
};

function BlogHorizontal({ title, description, img }: Props) {
  return (
    <div className="bg-[#4b6aa3] bg-opacity-40 mt-10 flex py-10 px-10 rounded-[10px] w-full">
      {/* left side */}
      <div className="flex flex-col px-3 py-4">
        {/* date  */}
        {/* <div className="w-[83.02px] h-[37.81px] pl-[15px] pr-4 pt-[6.90px] pb-[7.91px] bg-gradient-to-bl from-yellow-600 to-yellow-600 rounded-lg justify-center items-center inline-flex">
          <h1 className="text-white text-sm font-normal font-['Marsden'] capitalize leading-[22.82px] tracking-wide">
            31 MAY
          </h1>
        </div> */}
        {/* title and description */}
        <h1 className="w-[479px] text-white text-2xl font-bold font-['Marsden'] leading-[1.5] -mt-3">
          {title}
        </h1>

        <h2 className="w-[446px] text-white text-base font-normal font-['Marsden'] mt-4 leading-relaxed">
         {description}
        </h2>
      </div>
      {/* right side image */}
      <div>
        <Image
          width={483}
          height={332}
          className="rounded-[10px]"
          src={img}
          alt="blog-image"
        />
      </div>
    </div>
  );
}

export default BlogHorizontal;
