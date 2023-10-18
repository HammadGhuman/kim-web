"use client";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";
import Card2 from "@/public/card-2.png";
function BlogsCard() {
  const [blogs, setBlogs] = useState<any>([]);
  async function fetchBlogs() {
    const res = await fetch(`http://localhost:1337/api/blogs`);
    const body = await res.json();
    setBlogs(body.data);
    console.log(body.data);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {blogs.map((blog: any) => (
        <Blogs
          key={blog.id}
          title={blog.attributes.Title}
          description={blog.attributes.Description}
          image={Card2}
        />
      ))}
    </div>
  );
}

export default BlogsCard;
