import React from 'react'
import  IBlog  from './data.model'

export default function Blog({data}: IBlog) {
  return (
    <div className='flex flex-col md:gap-5 font-primary_font'>
        <div className=' h-[20rem] w-[100%] object-cover'>
            <img className='w-[100%] h-[100%]' src={data.imageUrl} alt="" />
        </div>
        <div className='flex flex-col md:gap-5'>
            <h2 className='text-2xl'>
                <a href={`blog/${data?.link}`}>
                {data.title}
                </a>
            </h2>
            <div className='font-secondary_gray text-[1.1rem]'>
                {data.categories.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,i: React.Key | null | undefined)=>(
                    <span key={i}>{item} |&nbsp;</span>
                ))}
                <span>BY <span className='text-final_gray'>{data.author} &nbsp;|&nbsp;</span></span>
                <span className='font-primary_font'>{data.date}</span>
            </div>
            <div className='text-final_gray text-[1.1rem]'>
                <p>{data.description}</p>
            </div>
        </div>
    </div>
  )
}
