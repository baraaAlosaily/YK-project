import Image from 'next/image'
import React from 'react'

export default function ServiceImage({currentData}:any) {
  return (
    <div data-aos="fade-up" className='md:px-28 md:py-5 px-10 py-5 font-primary_font'>
        <Image src={currentData.image} alt={currentData.id} width={1000} height={500} className='w-[100%] max-h-[40rem] object-cover'/>
    </div>
  )
}
