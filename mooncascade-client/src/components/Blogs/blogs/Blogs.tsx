"use client"
import React, { useState } from 'react'
import { IBlogs } from './data.model'
import Blog from '../blog/Blog'

export default function Blogs({data}:IBlogs) {
  return (
    <section className='md:px-28 md:py-28 px-10 py-10 font-primary_font'>
        <div className='lg:grid lg:grid-cols-2 gap-10 flex flex-col'>
            {
                data.map((item: any,i: React.Key | null | undefined)=>(
                    <Blog key={i} data={item}/>
                ))
            }
        </div>
    </section>
  )
}
