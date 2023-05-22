import React from 'react'

export default function Service({data}:any) {
    console.log(data)
  return (
    <div data-aos="fade-up" className='flex flex-col gap-10 font-primary_font justify-start mb-14 pb-6 border-b border-gray-400'>
        <h3 className=' text-3xl md:text-5xl'>{data.title}</h3>
        <p>{data.shortDesc}</p>
        <div className='flex flex-col gap-2 text-final_gray font-primary_font'>
        {
            data?.services.map((item:any,index:number)=>(
                <div className='ml-10 m-0 p-0' key={index}>
                    <p>{item}</p>
                </div>
            ))
        }
        </div>
        <button className=' rounded-3xl p-3 bg-primary_sky_blue w-32'>
            <a href={`/services/${data.link}`} className="hover:underline text-primary_white">Learn More</a>
        </button>
    </div>
  )
}
