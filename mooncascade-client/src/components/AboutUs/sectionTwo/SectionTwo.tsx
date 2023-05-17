import React from 'react'
import { ISectionTwo } from './data.model'


export default function SectionTwo({data}:ISectionTwo) {
  return (
    <section data-aos="fade-up" className='md:px-28 md:py-28 px-10 py-10 font-primary_font flex flex-col md:items-center md:justify-center '>
      <div>
        <h2 className='text-xl md:text-5xl mb-14'>{data.title}</h2>
      </div>
      <div className='flex flex-col gap-5 md:flex-row md:justify-between md:w-full '>
        {
          data.statistics.map((ele: any,i: React.Key | null | undefined)=>(
            <div key={i} className='flex flex-col gap-5'>
              <h3 className='text-lg text-final_gray' >{ele.scale}</h3>
              <p className='text-7xl md:text-[10rem]'>{ele.number}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
