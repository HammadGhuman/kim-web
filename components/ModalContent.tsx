import React from 'react';

type Props = {
  title: string;
  description: string|undefined;
};

function ModalContent({ title, description }: Props) {
  return (
    <div className='flex  justify-between border-b-2 pb-8'>
      <div className='flex flex-col items-start'>
        <h1 className="text-center font-['Marsden'] md:text-2xl font-medium leading-[72px] text-white">
          {title}
        </h1>
        <h1 className="md:w-[1091px] font-['Marsden'] md:text-xl font-medium text-white">
          {description}
        </h1>
      </div>
      <input  type='checkbox' className='toggle toggle-warning md:mt-10 mt-6' />
    </div>
  );
}

export default ModalContent;
