/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { cache, useEffect, useState } from 'react';
import Layout from '@/components/shared/layout/Layout';
import TransformModal from '@/components/shared/transformModal/TransformModal';
import data from '@/content/ourwork.json';
import SectionOne from '@/components/OurWork/sectionOne/SectionOne';
import SectionThree from '@/components/OurWork/sectionThree/SectionThree';
import { BASE_URL } from '@/constants/api';
import Posts from '@/components/OurWork/posts/Posts';
import AOSContainer from '@/components/AOS/AOSContainer';
import "aos/dist/aos.css";

const getPosts=cache(async()=>{
  const res = await fetch('api/posts');
  const data = await res.json();
  return data;
})

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
   <AOSContainer>
    <Layout handleOpen={handleOpen} >
     <SectionOne data={data.sectionOne}/>
     <Posts posts={posts}/>
     <SectionThree data={data.sectionThree} handleOpen={handleOpen}/>
     <TransformModal open={open} handleClose={handleClose} />
    </Layout>
  </AOSContainer>
  )
}

export default page