import React from 'react'
import { ISectionThree } from './data.model'

export default function SectionThree({data}: ISectionThree) {
  return (
    <section className='md:px-28 md:py-28 px-10 py-10 font-primary_font md:grid md:grid-cols-6 flex flex-col gap-8'>
        <div className='col-span-2'>
            <h2 className='text-xl mb-5'>{data.moreInfo.title}</h2>
        </div>
        <div className='col-span-4'>
            {
                data.moreInfo.moreInfoList.map((ele: any,i: React.Key | null | undefined)=>(
                    <div key={i} className='md:grid md:grid-cols-2 mb-5 flex flex-col gap-4'>
                        <div className='flex items-center col-span-1 gap-5'>
                            <img className='w-12' src={ele.img} alt={ele.title}/>
                            <h3 className='text-lg'>{ele.title}</h3>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-lg text-final_gray'>{ele.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
