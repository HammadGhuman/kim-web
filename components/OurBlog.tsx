'use client';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import ReadMoreButton from './ReadMoreButton';
import Link from 'next/link';

function OurBlog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch('http://localhost:1337/api/blogs?populate=*');
      const { data } = await res.json();
      setBlogs(data.slice(0, 3));
    };

    fetchBlog();
  }, []);
  return (
    <div
      id='UnsereBlogs'
      className='mt-28 flex flex-col items-center justify-center'
    >
      <div className='text-center font-Marsden'>
        <span className='text-4xl font-medium leading-[44px] tracking-wide text-white md:text-6xl'>
          Unsere <span className='text-yellow-600'>Blogs</span>
        </span>
      </div>
      <div className='mt-10 space-y-8 md:mt-20 md:flex md:flex-col'>
        {blogs &&
          blogs.map((item) => (
            <BlogCard
              key={
                //@ts-ignore
                item.id
              }
              img={
                //@ts-ignore
                item.attributes.blogimage.url
              }
              heading={
                //@ts-ignore
                item.attributes.Title
              }
              description={
                //@ts-ignore
                item.attributes.Description
              }
            />
          ))}
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
