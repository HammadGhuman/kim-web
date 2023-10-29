import React from "react";

type Props = {
  heading?: string;
  description?: string;
};

function Benifits({ heading, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 px-4 md:w-auto md:h-auto w-[334px] h-[166px] relative bg-blue-400 bg-opacity-20 rounded-[5px] border border-white md:px-24 md:py-10">
      <div className="md:w-[697px] text-sm  text-center text-orange-400 md:text-[40px] font-semibold font-Marsden tracking-tight md:leading-10">
        {heading}
      </div>
      <div className="md:w-[851px] text-[10px] text-center text-white md:text-[32px] font-normal font-['Marsden'] md:leading-[49px] tracking-tight">
        {description}
      </div>
    </div>
  );
}

export default Benifits;
