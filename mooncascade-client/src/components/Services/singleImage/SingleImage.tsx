import React from 'react'
import Image from 'next/image'

export default function SingleImage({data}:any) {
  return (
    <div data-aos="fade-up" className='md:px-28 md:py-28 px-20 py-20'>
        <Image src={data.Image.imageUrl} alt={data.Image.imageAlt} width={1000} height={1000} className='w-[100%] object-cover'/>
    </div>
  )
}
