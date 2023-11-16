import React from 'react';

type Props = {
  heading: string;
  subText: string;
};

function VortieleKimCard({ heading, subText }: Props) {
  return (
    <div className='flex flex-col items-center mt-20 md:px-0 px-3'>
      <div className="mb-10 w-auto md:w-[321px] text-center font-['Marsden'] text-[32px] font-semibold text-white">
        {heading}{' '}
      </div>
      <div className="md:w-[1068px] w-auto text-center font-['Marsden'] text-xl font-medium text-white">
        {subText}
      </div>
      <div className='mt-10 h-[0px] w-full md:w-[1178px] border border-white border-opacity-30'></div>
    </div>
  );
}

export default VortieleKimCard;
