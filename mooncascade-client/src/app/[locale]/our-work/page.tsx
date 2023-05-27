/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { cache, useEffect, useState } from 'react';
import data from '@/content/ourwork.json';
import SectionOne from '@/components/OurWork/sectionOne/SectionOne';
import SectionThree from '@/components/OurWork/sectionThree/SectionThree';
import Posts from '@/components/OurWork/posts/Posts';
import "aos/dist/aos.css";

const getPosts=cache(async()=>{
  const res = await fetch('/api/posts');
  const data = await res.json();
  return data;
})

function page() {
  const [posts, setPosts] = useState<never[]>([]);
  useEffect(() => {
    const fetchAll = async () => {
      const posts= await getPosts();
      setPosts(posts);
    }
    fetchAll()
  }, [])
  
  return (
   <>
     <SectionOne data={data.sectionOne}/>
     <Posts posts={posts}/>
     <SectionThree data={data.sectionThree}/>
  </>
  )
}

export default page