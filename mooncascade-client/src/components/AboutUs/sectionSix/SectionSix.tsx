"use client"
import React from 'react'
import { ISectionSix } from './data.model';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RightArrow from '@/components/utils/rightArrow/RightArrow';


export default function SectionSix({data}:ISectionSix) {
  return (
    <section className='md:px-28 md:py-28 px-10 py-10 font-primary_font flex flex-col gap-10'>
        <p className='text-final_gray text-lg lg:hidden' >{data.title}</p>
        {
            data.articles.map((ele: any,i: React.Key | null | undefined)=>(
                <div key={i} className='flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 justify-between gap-4 border-b-2 border-gray-200 pb-10'>
                    <div className='hidden lg:block'>
                        {
                            i==0&&<p className='text-final_gray text-lg' >{data.title}</p>
                        }
                    </div>
                    <div>
                        <p className='w-[100%] md:w-[50%] text-[1rem] md:text-lg'>{ele.title}</p>
                        <p className='text-final_gray'>{ele.category}</p>
                    </div>
                    <div className='w-[100%] h-[12.5rem]'>
                        <img className='w-[100%] h-[100%] object-cover' src={ele.img} alt={ele.id} />
                    </div>
                    <a href={ele.link} target='_blank'>
                     <div className='flex gap-2 justify-end'>
                          <p className='text-final_gray text-sm md:text-lg'>{'READ ARTICLE'}</p>
                          <span><RightArrow width={24} height={24}/></span> 
                     </div>
                    </a>
                </div>
            ))
        }
    </section>
  )
}
