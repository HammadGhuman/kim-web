'use client';
import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';
import Card2 from '@/public/card-2.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BlogHorizontal from './BlogHorizontal';
function BlogsCard({ query }: { query: string }) {
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    async function fetchBlogs() {
      console.log('fetch called');
      const res = await fetch(`http://localhost:1337/api/blogs?populate=*`);
      const body = await res.json();
      const filterBlogs = [];
      for (let blog of body.data) {
        // console.log(blog)
        const cat = blog.attributes.categories.data;
        console.log(query);
        for (let categories of cat) {
          if (
            query.trim() === '' ||
            categories.attributes.category_name === query
          ) {
            filterBlogs.push(blog);
            break;
          }
        }
      }

      console.log(filterBlogs);
      // const duplicates = [...filterBlogs, ...filterBlogs];
      // setBlogs(duplicates);
      setBlogs(filterBlogs);
    }
    fetchBlogs();
    console.log('run');
  }, [query]);
  const router = useRouter();
  return (
    <div className='flex items-center justify-center'>
      <div className='hidden max-w-5xl ml-8 md:grid md:grid-cols-3 md:gap-3'>
        {blogs.map((blog: any, index: number) => (
          <div
            className={`cursor-pointer ${
              index === 0 || index % 4 === 0
                ? '  mr-10 md:col-span-3'
                : 'col-span-1'
            } `}
            key={blog.id}
            onClick={() => {
              router.push(`blog-details/${blog.id}`);
            }}
          >
            {index === 0 || index % 4 === 0 ? (
              <BlogHorizontal
                title={blog.attributes.Title}
                description={blog.attributes.Description}
                img={blog.attributes.blogimage.data.attributes.url}
              />
            ) : (
              <Blogs
                title={blog.attributes.Title}
                description={blog.attributes.Description}
                image={blog.attributes.blogimage.data.attributes.url}
              />
            )}
          </div>
        ))}
      </div>

      <div className='md:hidden flex max-w-5xl flex-col items-center justify-center'>
        {blogs.map((blog: any, index: number) => (
          <div
            className={`cursor-pointer `}
            key={blog.id}
            onClick={() => {
              router.push(`blog-details/${blog.id}`);
            }}
          >
            <Blogs
              title={blog.attributes.Title}
              description={blog.attributes.Description}
              image={blog.attributes.blogimage.data.attributes.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsCard;
