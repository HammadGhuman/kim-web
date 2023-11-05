import React from 'react';
import ReviewCard from './ReviewCard';
import ReadMoreButton from './ReadMoreButton';

function BusinessSpecialist() {
  return (
    <div className='mt-10 flex flex-col items-center justify-center'>
      <div className='h-[67px] w-[271px] text-center'>
        <span className='text-4xl font-medium text-white '>HEAR FROM OUR </span>
        <span className='text-4xl font-medium text-yellow-600 '>
          BUSINESS SPECIALIST
        </span>
      </div>
      <div className='mb-10 mt-40 flex flex-col items-center justify-center space-y-10 md:w-full md:flex-row  md:justify-around md:space-y-0'>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      {/* <ReadMoreButton /> */}
    </div>
  );
}

export default BusinessSpecialist;
