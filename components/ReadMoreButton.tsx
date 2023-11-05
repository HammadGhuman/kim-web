import React from 'react';

type Props = {
  text: string | 'Read More';
};

function ReadMoreButton({ text }: Props) {
  return (
    <div className='flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#B77828]'>
      <div className='text-center text-xl font-medium text-white'>{text}</div>
    </div>
  );
}

export default ReadMoreButton;
