import Image from 'next/image'
import React from 'react'

interface Props{
    image:string,
    alter:string
}

export default function HappyImage({image,alter}:Props) {
  return (
    <div className='w-[100%]' data-aos="fade-up" >
        <Image
            src={image}
            alt={alter}
            width={500}
            height={250}
            className='w-[100%]'/> 
          {/* <img className='w-[100%] sm:pt-16 pt-14'src={image} alt={alter} loading='lazy'/> */}
    </div>
  )
}
