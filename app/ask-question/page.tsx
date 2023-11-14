'use client';
import Faq from '@/components/Faq';
import React, { useEffect, useState } from 'react';

import BlogsCard from '@/components/BlogsCard';

// function CategorySlider({
//   categories,
//   activeTab,
//   activeTabIn,
//   handleClick,
//   handleActiveTab,
// }: any) {
//   const itemsPerPage = 4;
//   const totalPages = categories.length - 3;

//   const handlePrev = () => {
//     handleClick(activeTab - 1);
//   };

//   const handleNext = () => {
//     handleClick(activeTab + 1);
//   };

//   const renderCategories = () => {
//     const start = activeTab - 1;
//     const end = start + itemsPerPage;

//     return (
//       <div className='flex w-[900px] items-center justify-between'>
//         {categories.slice(start, end).map((category: any, index: any) => (
//           <div
//             key={index}
//             className={`my-10 ml-10 cursor-pointer select-none  font-Marsden text-xl font-semibold text-white ${
//               activeTabIn === index + 1
//                 ? 'border-b-4 border-[#B77828] opacity-100'
//                 : 'opacity-50'
//             }`}
//             onClick={() => handleActiveTab(index + 1)}
//           >
//             {category.attributes?.category_name}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <button
//         className='mr-4 scale-75 rounded-xl bg-zinc-400 px-3 pb-2 text-center text-4xl text-white'
//         onClick={handlePrev}
//         disabled={activeTab === 1}
//       >
//         {`<`}
//       </button>
//       <div className='flex'>{renderCategories()}</div>
//       <button
//         className='ml-4 scale-75 rounded-xl bg-zinc-400 px-3 pb-2 text-center text-4xl text-white'
//         onClick={handleNext}
//         disabled={activeTab === totalPages}
//       >
//         {'>'}
//       </button>
//     </div>
//   );
// }

function AskQuestion() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTabInd, setActiveTabInd] = useState(1);
  const [categories, setCategories] = useState([
    'All Posts',
    'Leadership',
    'Leadership And Development',
    'Cricket',
    'Politics',
    'Technology',
    'Self Help',
    'Current Affairs',
  ]);

  const [activeCat, setActiveCat] = useState('');
  const handleActiveTab = (tab: any, category: string) => {
    setActiveTabInd(tab);
    setActiveCat(category);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(`http://localhost:1337/api/categories`);
      const data = await res.json();
      setCategories(data.data);
    };
    fetchCategory();
  }, []);

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
        <div className='my-10 flex max-w-[60%] space-x-20 overflow-x-scroll pr-10  '>
          {categories &&
            categories.map((item, index) => (
              <div
                key={index}
                className={` mb-3 ml-10 w-max ${
                  index === 2 && 'w-[300px]'
                } cursor-pointer select-none  font-Marsden text-xl font-semibold text-white ${
                  activeTabInd === index + 1
                    ? 'border-b-4 border-[#B77828] opacity-100'
                    : 'opacity-50'
                }`}
                onClick={() =>
                  //@ts-ignore
                  handleActiveTab(index + 1, item.attributes?.category_name)
                }
              >
                
                <h1 className='w-max'> {
                  //@ts-ignore
                item.attributes?.category_name
                }</h1>
              </div>
            ))}
        </div>
        <div>
          <BlogsCard query={activeCat} />
        </div>
      </div>
    </main>
  );
}

export default AskQuestion;
