import Faq from '@/components/Faq';
import React from 'react';
import AskQuestions from '@/components/AskQuestions';

function page() {
  return (
    <div className='h-auto'>
      <AskQuestions /> <Faq />
    </div>
  );
}

export default page;
