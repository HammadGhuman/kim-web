import React from "react";
import BlogDetailCard from "@/components/BlogDetailCard";
import Paragraph from "@/components/Paragraph";
import NewUserCard from "@/components/NewUserCard";
import Reply from "@/components/Reply";

function BlogDetails() {
  return (
    <main>
      <BlogDetailCard />
      <Paragraph />
      <NewUserCard />
      <Reply />
    </main>
  );
}

export default BlogDetails;
