"use client";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";
import Card2 from "@/public/card-2.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BlogHorizontal from "./BlogHorizontal";
function BlogsCard({ query }: { query: string }) {
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    async function fetchBlogs() {
      console.log("fetch called");
      const res = await fetch(
        `http://localhost:1337/api/blogs?filters[Category]${query}`
      );
      console.log(`http://localhost:1337/api/blogs?filters[Category]${query}`);
      const body = await res.json();
      setBlogs(body.data);
      console.log(body.data);
    }
    fetchBlogs();
  }, []);
  const router = useRouter();
  return (
    <div className="flex items-center justify-center">
      <div className="flex md:grid md:grid-cols-3 md:gap-3 max-w-5xl flex-col items-center justify-center">
        {blogs.map((blog: any, index: number) => (
          <div
            className={`cursor-pointer ${index === 0 || index === blogs.length - 1 ? " col-span-3 mr-10" : "col-span-1"} `}
            key={blog.id}
            onClick={() => {
              router.push(`blog-details/${blog.id}`);
            }}
          >
            {index === 0 || index === blogs.length - 1 ? ( // Check if it's the first or last blog
              <BlogHorizontal
                title={blog.attributes.Title}
                description={blog.attributes.Description}
                img={blog.attributes.imageurl}
              />
            ) : (
              <Blogs
                title={blog.attributes.Title}
                description={blog.attributes.Description}
                image={blog.attributes.imageurl}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsCard;
