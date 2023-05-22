import React from 'react'

export default function ServiceMethod({currentData}:any) {
  return (
    <div data-aos="fade-up" className='md:px-28 md:py-10 px-10 py-10 font-primary_font md:grid md:grid-cols-8 flex flex-col gap-5'>
        <div className=' col-span-2  text-[1.3rem]'>
            <p>{currentData.method.key}</p>
        </div>
        <div className=' col-span-6 md:text-[1.2rem] text-[1rem] md:leading-8'>
              <div dangerouslySetInnerHTML={{ __html: currentData.method.value }} />
        </div>
    </div>
  )
}
