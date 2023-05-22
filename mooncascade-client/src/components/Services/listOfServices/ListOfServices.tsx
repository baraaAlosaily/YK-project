import { usePathname } from 'next/navigation';
import React from 'react'


export default function ListOfServices({data,currentData}:any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const searchParams = usePathname();
  return (
    <div data-aos="fade-up" className="md:px-28 md:py-10 px-10 py-10 font-primary_font md:grid md:grid-cols-8 flex flex-col-reverse gap-10">
        <div className='md:col-span-2'>
            {
                data.allServicesLinks.map((item:any,index:number)=>(
                    <div key={index} className='flex flex-col mb-5'>
                        <a href={`/services/${item.key}`}  className={`text-[1.2rem] text-final_gray ${item.key===searchParams?.split('/')[2]?"font-bold underline":""} hover:underline`}>{item.value}</a>
                    </div>                    
                ))
            }
        </div>
        <div className='md:col-span-6'>
            <h2 className='md:text-5xl mb-5 text-3xl md:pt-10 '>{currentData.title}</h2>
        </div>
    </div>
  )
}
