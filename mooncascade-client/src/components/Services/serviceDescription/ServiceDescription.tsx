import React from 'react'

export default function ServiceDescription({currentData}:any) {
  return (
    <div data-aos="fade-up" className='md:px-28 md:py-10 px-10 py-10 font-primary_font md:grid md:grid-cols-8'>
        <div className=' col-span-2'></div>
        <div className=' col-span-6'>
            <p className='md:text-[1.3rem] text-[1rem]'>{currentData.description}</p>
        </div>
    </div>
  )
}
