"use client";
import React, { useEffect, useState } from "react";
import BlogDetailCard from "@/components/BlogDetailCard";
import Paragraph from "@/components/Paragraph";
import NewUserCard from "@/components/NewUserCard";
import Reply from "@/components/Reply";
interface Props {
  params: Params;
  searchParams: SearchParams;
}

interface Params {
  id: string;
}

interface SearchParams {}

function BlogDetails(props: Props) {
  const [blogData, setBlogData] = useState<any>();

  async function fetchBlogs() {
    const res = await fetch(
      `http://localhost:1337/api/blogs/${props.params.id}`
    );
    const body = await res.json();
    setBlogData(body.data);
    console.log(body.data);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main>
      {blogData && <BlogDetailCard img={blogData.attributes.imageurl} />}
      {blogData && <Paragraph content={blogData.attributes.content} />}
      <NewUserCard />
      <Reply />
    </main>
  );
}

export default BlogDetails;