import Expand from '@/components/shared/Expand/Expand'
import React from 'react'

export default function ServiceExpands({currentData}:any) {
  return (
    <div data-aos="fade-up" className='md:px-28 md:py-10 px-10 py-10 font-primary_font flex flex-col gap-5'>
        <div className='md:grid md:grid-cols-8'>
            <div className=' col-span-2'></div>
            <div className=' col-span-6'>
                <h3 className=' md:text-3xl text-xl'>{currentData.title}</h3>
            </div>
        </div>
        <div className='md:grid md:grid-cols-8 flex flex-col gap-5'>
            <div className='md:text-[1.3rem] text-[1.2rem] col-span-2'>{currentData.subTitle}</div>
            <div className=' col-span-6'>
                <Expand w={'33%'} expandedData={currentData.expand}/>
            </div>
        </div>
    </div>
  )
}
