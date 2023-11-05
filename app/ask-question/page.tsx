'use client';
import Faq from '@/components/Faq';
import React, { useState } from 'react';
import AskQuestions from '@/components/AskQuestions';
import BlogsCard from '@/components/BlogsCard';
function AskQuestion() {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <main>
      <div
        id='BlogsundDetails'
        className='mt-24 flex flex-col items-center justify-center'
      >
        <div className='w-[225px] text-center md:w-auto'>
          <span className='text-[38px] font-medium leading-10 text-white md:text-[62px]'>
            Blogs &{' '}
          </span>
          <span className='text-[38px] font-medium leading-10 text-[#ae7226] md:text-[62px]'>
            Artikel
          </span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex'>
          <div
            className={`my-10 ml-10 cursor-pointer select-none  font-Marsden text-xl font-semibold text-white ${
              activeTab === 1
                ? 'border-b-4 border-[#B77828] opacity-100'
                : 'opacity-50'
            }`}
            onClick={() => handleClick(1)}
          >
            All Post
          </div>
          <div
            className={`my-10 ml-10 cursor-pointer select-none  font-Marsden text-xl font-semibold text-white ${
              activeTab === 2
                ? 'border-b-4 border-[#B77828] opacity-100'
                : 'opacity-50'
            }`}
            onClick={() => handleClick(2)}
          >
            Leadership
          </div>
          <div
            className={`my-10 ml-10 cursor-pointer select-none  font-Marsden text-xl font-semibold text-white ${
              activeTab === 3
                ? 'border-b-4 border-[#B77828] opacity-100'
                : 'opacity-50'
            }`}
            onClick={() => handleClick(3)}
          >
            Leadership and Development
          </div>
          <div
            className={`my-10 ml-10 cursor-pointer select-none  font-Marsden text-xl font-semibold text-white ${
              activeTab === 4
                ? 'border-b-4 border-[#B77828] opacity-100'
                : 'opacity-50'
            }`}
            onClick={() => handleClick(4)}
          >
            More
          </div>
        </div>
        <div>
          {activeTab === 1 && <BlogsCard query='[$ne]=a' />}
          {activeTab === 2 && <BlogsCard query='[$eq]=Leadership' />}
          {activeTab === 3 && (
            <BlogsCard query='[$eq]=Leadership and Development' />
          )}
          {activeTab === 4 && <BlogsCard query='[$eq]=Development' />}
        </div>
      </div>
    </main>
  );
}

export default AskQuestion;
