import React from "react";
type Props = {
    date:string;
    title:string;
    description:string;
}

function Roadmap(props:Props) {
  return (
    <div className="max-w-[288px] md:max-w-[700px] md:h-[380px] h-[310px] md:w-auto font-Marsden px-4 md:pl-10 md:pr-28 pb-10 md:pb-7 rounded-2xl border border-white">
      <div className="flex flex-col mt-16 md:mt-5 -space-y-5 md:space-y-5">
        <div className="w-[49px] md:w-full h-[45px] text-white text-[13px] font-normal md:text-[40px]  tracking-[3.20px]">
          {props.date}
        </div>
        <div className="w-[34px] h-[5px] border-t border-neutral-500" />
      </div>
      <div className="w-[242px] md:text-[16px]  md:tracking-widest md:w-full h-[23px] mt-6 text-white text-xs font-normal  leading-relaxed tracking-widest">
        {props.title}
      </div>
      <div className="mt-10 md:w-full w-[260px] h-[131px] md:text-base md:leading-7 md:tracking-wide text-white text-[10px] font-normal  leading-[13.80px] tracking-wide">
       {props.description}
      </div>
    </div>
  );
}

export default Roadmap;
