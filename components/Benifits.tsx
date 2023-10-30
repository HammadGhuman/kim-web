import React from "react";

type Props = {
  heading?: string;
  description?: string;
};

function Benifits({ heading, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 px-4 md:w-auto md:h-auto w-[334px] h-[166px] relative bg-blue-400 bg-opacity-10 rounded-[5px] border border-white md:px-24 md:py-10">
      <div className="w-[697px] text-center text-[#cd9146] text-[40px] font-semibold font-['Marsden'] tracking-tight">
       {heading}
      </div>
      <div className="w-[851px] text-center text-white text-[32px] font-normal font-['Marsden'] leading-[49px] tracking-tight">
        {description}
      </div>
    </div>
  );
}

export default Benifits;
