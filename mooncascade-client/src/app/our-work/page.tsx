"use client"
import React, { useEffect, useState } from 'react';
import Layout from '@/components/shared/layout/Layout';
import TransformModal from '@/components/shared/transformModal/TransformModal';
import data from '@/content/ourwork.json';
import SectionOne from '@/components/OurWork/sectionOne/SectionOne';
import SectionThree from '@/components/OurWork/sectionThree/SectionThree';
import { BASE_URL } from '@/constants/api';
import Posts from '@/components/OurWork/posts/Posts';

const getPosts=async()=>{
  const res = await fetch(BASE_URL+'/posts');
  const data = await res.json();
  return data;
}

function page() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [posts, setPosts] = useState<never[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      const posts= await getPosts();
      setPosts(posts);
    }
    fetchAll()
  }, [])
  
  return (
    <Layout handleOpen={handleOpen} >
     <SectionOne data={data.sectionOne}/>
     <Posts posts={posts}/>
     <SectionThree data={data.sectionThree}/>
     <TransformModal open={open} handleClose={handleClose} />
    </Layout>
  )
}

export default page