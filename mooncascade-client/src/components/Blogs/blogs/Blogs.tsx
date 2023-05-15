import React from 'react'
import { IBlogs } from './data.model'
import Blog from '../blog/Blog'

export default function Blogs({data}:IBlogs) {
  return (
    <section>
        <div></div>
        <div>
            {
                data.map((item: any,i: React.Key | null | undefined)=>(
                    <Blog key={i} data={item}/>
                ))
            }
        </div>
    </section>
  )
}
