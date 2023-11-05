'use client';
import React, { useEffect, useState } from 'react';

function Faq() {
  const [faqs, setFaqs] = useState<any>([]);
  const [activeFaqId, setActiveFaqId] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch(`http://localhost:1337/api/faqs`);
      const data = await res.json();
      setFaqs(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id='Fragenstellen' className='mx-auto mt-24 pr-2'>
      <div
        id='faqs'
        className='flex flex-col items-center justify-center  space-y-2 text-center text-white'
      >
        {faqs &&
          faqs.map((faq: any) => (
            <div
              key={faq.id}
              className={` ${
                activeFaqId === faq.id
                  ? 'rounded-xl border-b-0 bg-[#5174AE] bg-opacity-40'
                  : 'border-b-[1px]'
              }`}
              onClick={() => setActiveFaqId(faq.id)}
            >
              <div className='collapse collapse-plus pl-3 font-Marsden md:max-w-4xl lg:max-w-6xl xl:max-w-7xl '>
                <input type='radio' name='my-accordion-3' />
                <div className='collapse-title pr-10 text-left text-xl font-bold'>
                  {faq.attributes.Question}
                </div>
                <div className='collapse-content pr-10 text-left text-[13px] font-medium'>
                  <p>{faq.attributes.Answer}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Faq;
