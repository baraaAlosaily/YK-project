import React from 'react'

export default function SectionOne({data}:any) {
  return (
    <section data-aos="fade-up" className='md:px-28 md:pb-28 md:pt-36 px-10 pt-24 pb-10 font-primary_font lg:grid lg:grid-cols-8'>
        <div className='lg:col-span-2'></div>
        <div className='lg:col-span-6 flex flex-col gap-5'>
            <h1 className='text-3xl md:text-6xl py-5'>{data.sectionOne.title}</h1>
            <div className='flex justify-between bg-primary_sky_blue' >
               <div className='flex flex-col gap-3 lg:gap-16 justify-center items-start text-primary_white'>
                  <p className='lg:text-[1.3rem] text-lg md:pl-10 pl-5' >{data.sectionOne.content[0].title}</p>
                  <p className='lg:text-[8rem] text-3xl md:pl-10 pl-5'>{data.sectionOne.content[0].count}</p>
               </div>
               <video className='m-0 p-0 max-h-max lg:w-[40%] md:w-80 w-36'  src="/services/moon_v2.mp4" autoPlay muted loop></video>
            </div>
        </div>
    </section>
  )
}
