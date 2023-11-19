import React from 'react';

type Props = {
  text: string | 'Read More';
};

function ReadMoreButton({ text }: Props) {
  return (
    <button className='flex h-[61px] w-[225px] items-center justify-center rounded-[10px] select-none hover:cursor-pointer focus:scale-90
     hover:bg-yellow-700 transition-all duration-200 bg-[#b77828]'>
      <div className='text-center text-xl font-medium text-white'>{text}</div>
    </button>
  );
}

export default ReadMoreButton;
