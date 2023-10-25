"use client";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";
import Card2 from "@/public/card-2.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <div className="flex items-center justify-center">
      <div className="flex md:grid md:grid-cols-3 md:gap-3 max-w-5xl flex-col items-center justify-center">
        {blogs.map((blog: any) => (
          <div className="cursor-pointer" key={blog.id} onClick={()=>{router.push(`blog-details/${blog.id}`)}}>
            <Blogs
              title={blog.attributes.Title}
              description={blog.attributes.Description}
              image={blog.attributes.imageurl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsCard;
