import Faq from "@/components/Faq";
import React from "react";
import BlogTitle from "@/components/BlogTitle";
import AskQuestions from "@/components/AskQuestions";
import BlogsCard from "@/components/BlogsCard";
function AskQuestion() {
  return (
    <main>
      <AskQuestions />
      <Faq />
      <BlogTitle />
    <BlogsCard />
    </main>
  );
}

export default AskQuestion;
