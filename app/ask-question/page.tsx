import Faq from "@/components/Faq";
import React from "react";
import Card2 from "@/public/card-2.png";
import BlogTitle from "@/components/BlogTitle";
import Blogs from "@/components/Blogs";
import AskQuestions from "@/components/AskQuestions";
function AskQuestion() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <main>
      <AskQuestions />
      <Faq />
      <BlogTitle />
      <div className="flex flex-col items-center justify-center">
        {cards.map((items) => (
          <Blogs
            key={items}
            title="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio nemo quod dolore esse doloribus."
            image={Card2}
          />
        ))}
      </div>
    </main>
  );
}

export default AskQuestion;
