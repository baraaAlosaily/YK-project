import Post from '@/components/OurWork/post/Post';
import { Skeleton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { cache, useEffect, useState } from 'react'
const getPosts=cache(async()=>{
    const res = await fetch('/api/posts');
    const data = await res.json();
    return data;
  })

export default function OtherWorks() {
    const [posts, setPosts] = useState<never[]>([]);
    const numbers=[1,2,3]
    useEffect(() => {
      const fetchAll = async () => {
          const posts= await getPosts();
          const rendomNum=Math.floor(Math.random() * ((posts.length-3) - 0 + 1)) + 0;
          const randPosts=posts.slice(rendomNum,rendomNum+3)
        setPosts(randPosts);
      }
      fetchAll()
    }, [])
  return (
    <div data-aos="fade-up" className='md:px-28 md:py-28 px-10 py-10 font-primary_font flex flex-col' >
        <div className='flex justify-start items-center gap-5 my-10 '>
            <ArrowBackIcon className='text-2xl'/>
            <a href='/our-work' className='text-2xl text-final_gray'>All Works</a>
        </div>
        <div className='md:grid md:grid-cols-3 gap-5 flex flex-col'>
            {
               posts.length>0 ?posts.map((post:any)=>(
                    <Post key={post.id} post={post}/>
                )
            ):(
                numbers.map((item:number,index:number)=>(
                <Skeleton key={index} variant="rectangular" height="20rem" className='w-[100%] lg:h-[20rem] h-[20rem]'/>
                ))
            )
        }    
        </div>
    </div>
  )
}
