"use client"
import React, { useState } from 'react'
import { IBlogs } from './data.model'
import Blog from '../blog/Blog'
import { Skeleton } from '@mui/material'

export default function Blogs({data}:IBlogs) {
  const arr=[1,2,3,4,5,6,7,8,9,10]
  return (
    <section className='md:px-28 md:py-28 px-10 py-10 font-primary_font'>
        <div className='lg:grid lg:grid-cols-2 gap-10 flex flex-col'>
            {
                data.length? data.map((item: any,i: React.Key | null | undefined)=>(
                    <Blog key={i} data={item}/>
                )):(
                    arr.map((item: any,i: React.Key | null | undefined)=>(
                        <Skeleton key={i} variant="rectangular" height="10rem" className='w-[100%] lg:h-[20rem] h-[20rem]'/>
                    ))
                )
            }
        </div>
    </section>
  )
}
