import React from 'react';

function BlogTitle() {
  return (
    <div className='mt-10 flex flex-col items-center justify-center'>
      <div className='w-[225px] text-center md:w-auto'>
        <span className='text-[38px] font-medium leading-10 text-white md:text-[62px]'>
          Blog &{' '}
        </span>
        <span className='text-[38px] font-medium leading-10 text-orange-400 md:text-[62px]'>
          Articles
        </span>
      </div>
    </div>
  );
}

export default BlogTitle;
