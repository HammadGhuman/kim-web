'use client';
import React, { useEffect, useState } from 'react';
import AskQuestions from '@/components/AskQuestions';
import Image from 'next/image';
import Search from '@/public/Search.png';
import Fuse from 'fuse.js';
function page() {
  const [faqs, setFaqs] = useState<any>([]);
  const [activeFaqId, setActiveFaqId] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [fuse, setFuse] = useState<any>(null);

  const handleCheckboxChange = (value:any) => {
    setSelectedOption(value === selectedOption ? null : value);
  };
  const handleAccordionToggle = (faqId: any) => {
    setActiveFaqId((prevId) => (prevId === faqId ? null : faqId));
  };

  async function fetchData() {
    try {
      const res = await fetch(`http://localhost:1337/api/faqs`);
      const data = await res.json();
      console.log(data);
      setFaqs(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFuse(
      new Fuse(faqs, {
        keys: ['attributes.Question', 'attributes.Answer'],
        includeScore: true,
        threshold: 0.4,
      })
    );
  }, [faqs]);

  function filterFaqs() {
    if (!searchInput || !fuse) {
      return faqs;
    }

    const result = fuse.search(searchInput);

    return result.map((item: any) => item.item);
  }

  return (
    <div className='h-auto'>
      <div className='mt-24 flex flex-col items-center justify-center font-Marsden'>
        <div className='w-[225px] text-center md:w-full'>
          <span className='text-[38px]  font-medium leading-10 text-white md:text-[62px]'>
            FAQs
          </span>
        </div>

        <div className='relative mt-12'>
          <Image
            className='absolute left-4 top-5'
            width={18}
            height={18}
            src={Search}
            alt='search'
          />
          <input
            className='h-[59px] w-[279px]  rounded-[7px] bg-[#4869a4]  bg-opacity-40 px-16  text-white md:w-[600px] lg:w-[800px]  xl:w-[1000px]'
            placeholder='Suche'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>{' '}
      <div id='Fragenstellen' className=' mt-24 pr-2'>
        <div
          id='faqs'
          className='flex flex-col items-center justify-center  space-y-2 text-center text-white'
        >
          {faqs &&
            filterFaqs().map((faq: any, index: any) => (
              <div
                key={faq.id}
                className={` ${
                  activeFaqId === faq.id
                    ? 'rounded-xl border-b-0 bg-[#5174AE] bg-opacity-40'
                    : 'border-b-[1px]'
                }`}
                onClick={() => setActiveFaqId(faq.id)}
              >
                <div
                  className='collapse collapse-plus w-full pl-3 font-Marsden md:max-w-4xl lg:max-w-6xl xl:max-w-7xl'
                  onClick={() => handleAccordionToggle(faq.id)}
                >
                  <input
                    type='checkbox'
                    name='my-accordion-3'
                    checked={selectedOption === faq.attributes.Question}
                    onChange={() =>
                      handleCheckboxChange(faq.attributes.Question)
                    }
                  />
                  <div className='collapse-title pr-10 text-left text-xl font-bold'>
                    {faq.attributes.Question}
                  </div>
                  <div className='collapse-content  pr-10 text-left text-[13px] font-medium md:w-[56rem] lg:w-[72rem] xl:w-[80rem]'>
                    <p>{faq.attributes.Answer}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default page;
