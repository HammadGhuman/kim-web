'use client';
import React, { useEffect, useState } from 'react';
import BlogDetailCard from '@/components/BlogDetailCard';
import Paragraph from '@/components/Paragraph';
import NewUserCard from '@/components/NewUserCard';
import Reply2 from '@/components/Reply2';
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
      `http://localhost:1337/api/blogs/${props.params.id}?populate=*`
    );
    const body = await res.json();
    setBlogData(body.data);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main>
      {blogData && (
        <BlogDetailCard
          img={blogData.attributes.blogimage.data.attributes.url}
        />
      )}
      {blogData && <Paragraph content={blogData.attributes.content} />}
      {blogData && (
        <NewUserCard
          img={blogData.attributes.authorImage.data[0].attributes.url}
          authorName={blogData.attributes.authorName}
          authorDes={blogData.attributes.authorDes}
        />
      )}
      <div className='mt-40'>
        <Reply2 />
      </div>
    </main>
  );
}

export default BlogDetails;
