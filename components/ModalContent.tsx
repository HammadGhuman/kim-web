import React from 'react';

type Props = {
  title: string;
  description: string|undefined;
};

function ModalContent({ title, description }: Props) {
  return (
    <div className='flex border-b-2 pb-8'>
      <div className='flex flex-col items-start'>
        <h1 className="text-center font-['Marsden'] text-2xl font-medium leading-[72px] text-white">
          {title}
        </h1>
        <h1 className="w-[1091px] font-['Marsden'] text-xl font-medium text-white">
          {description}
        </h1>
      </div>
      <input  type='checkbox' className='toggle toggle-warning mt-10' />
    </div>
  );
}

export default ModalContent;
