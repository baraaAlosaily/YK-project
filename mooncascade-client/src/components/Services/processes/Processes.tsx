import Expand from '@/components/shared/Expand/Expand'
import React from 'react'

export default function Processes({expandedData, data}:any) {
  return (
    <section data-aos="fade-up" className='lg:col-span-5 md:px-28 md:py-28 px-10 py-10 font-primary_font flex flex-col'>
        <div className='md:grid grid-cols-8 md:mb-10 mb-5'>
            <div className='col-span-2'></div>
            <h2 className='col-span-6 md:text-6xl text-3xl'>{data.Processes.title}</h2>
        </div>
        <div className='md:grid grid-cols-8 flex flex-col md:mb-10 mb-5'>
            <p  className='col-span-2 text-[1rem] md:text-[1.3rem]'>{data.Processes.subtitle}</p>
            <div dangerouslySetInnerHTML={{ __html: data.Processes.description}} className='col-span-6 text-[1rem] md:text-[1.3rem]'/>
        </div>
        <div className='md:grid grid-cols-8'>
            <div className='col-span-2'></div>
            <div className='col-span-6'>
                <Expand w={'33%'} expandedData={expandedData}/>
            </div>
        </div>
    </section>
  )
}
