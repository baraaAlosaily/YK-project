import React from 'react'

export default function SectionOne({data}:any) {
  return (
    <section className='md:px-28 md:pb-28 md:pt-36 px-10 pt-24 pb-10 font-primary_font md:grid md:grid-cols-8 flex flex-col-reverse md:gap-0 gap-10'>
        <div className=' md:col-span-2 text-final_gray flex md:flex-col gap-5 overflow-y-scroll md:overflow-hidden '>
            {
                data.SectionOne.filters.map((item:any,index:number)=>(
                    <div className="max-w-max" key={index}>
                        <a className='max-w-max block underline cursor-pointer ' href="">
                            {item}
                        </a>
                    </div>
                ))
            }
        </div>
        <div className='md:col-span-6 flex flex-col justify-between gap-10'>
            <h1 className='md:text-6xl text-3xl'>{data.SectionOne.title}</h1>
            <div className='flex md:flex-row flex-col gap-10 md:items-center'>
                <p className='md:text-[1.3rem]'>{data.SectionOne.content}</p>
                <button className=' bg-primary_sky_blue p-4 rounded-3xl text-primary_white'>{data.SectionOne.button}</button>
            </div>
        </div>
    </section>
  )
}
