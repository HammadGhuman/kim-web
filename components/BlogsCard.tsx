"use client";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";
import Card2 from "@/public/card-2.png";
import Image from "next/image";
function BlogsCard() {
  // const [blogs, setBlogs] = useState<any>([]);
  // async function fetchBlogs() {
  //   const res = await fetch(`http://localhost:1337/api/blogs`);
  //   const body = await res.json();
  //   setBlogs(body.data);
  //   console.log(body.data);
  // }

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex items-center justify-center">
      <div className="flex md:grid md:grid-cols-3 md:gap-3 max-w-5xl flex-col items-center justify-center">
        {blogs.map((blog: any) => (
          <Blogs
            key={blog}
            title={"BLog Title"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur iusto iste doloribus. Expedita in reprehenderit asperiores volu error. Ut explicabo pariatur, magni illo voluptatum iste ipsam blanditiis harum debitis labore optio laborum unde!"
            }
            image={Card2}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogsCard;
