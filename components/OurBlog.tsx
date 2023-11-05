import React from 'react';
import BlogCard from './BlogCard';
import ReadMoreButton from './ReadMoreButton';
import Link from 'next/link';

function OurBlog() {
  return (
    <div
      id='UnsereBlogs'
      className='mt-28 flex flex-col items-center justify-center'
    >
      <div className='text-center font-Marsden'>
        <span className='text-4xl font-medium leading-[44px] tracking-wide text-white md:text-6xl'>
          Unsere Blogs
        </span>
      </div>
      <div className='mt-10 space-y-8 md:mt-20 md:flex md:flex-col'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Link href='ask-question'>
        <div className='mt-20'>
          <ReadMoreButton text='Mehr lesen' />
        </div>
      </Link>
    </div>
  );
}

export default OurBlog;
