import React from 'react';
type Props = {
  date: string;
  title: string;
  description: string;
};

function Roadmap(props: Props) {
  return (
    <div className='h-[310px] max-w-[288px] rounded-2xl border border-white px-4 pb-10 font-Marsden md:h-[380px] md:w-auto md:max-w-[700px] md:pb-7 md:pl-10 md:pr-28'>
      <div className='mt-16 flex flex-col -space-y-5 md:mt-5 md:space-y-5'>
        <div className='h-[45px] w-[49px] text-[13px] font-normal tracking-[3.20px] text-white md:w-full  md:text-[40px]'>
          {props.date}
        </div>
        <div className='h-[5px] w-[34px] border-t border-neutral-500' />
      </div>
      <div className='mt-6 h-[23px]  w-[242px] text-xs font-normal leading-relaxed tracking-widest text-white md:w-full  md:text-[16px] md:tracking-widest'>
        {props.title}
      </div>
      <div className='mt-10 h-[131px] w-[260px] text-[10px] font-normal leading-[13.80px] tracking-wide text-white md:w-full md:text-base  md:leading-7 md:tracking-wide'>
        {props.description}
      </div>
    </div>
  );
}

export default Roadmap;
