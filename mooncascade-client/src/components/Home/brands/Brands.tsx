/* eslint-disable @next/next/no-img-element */
import { Skeleton } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Props{
    brands:any[]
    text:string
}
export default function Brands({brands,text}:Props) {
  return (
    <section data-aos="fade-up" className=" flex flex-col lg:grid lg:grid-cols-3 gap-10 md:px-28 md:py-28 px-10 py-10 font-primary_font text-xl md:text-[1.3rem]">
      <div className="lg:col-span-1" data-aos="fade-up">{text}</div>
      <div className="lg:col-span-2 flex flex-wrap gap-8 sm:gap-14">
        {
           brands.length>0?brands.map((brand:any)=>(
               <a data-aos="fade-up" key={brand.id} href="">
                  <Image
                    src={brand.imageUrl}
                    alt={brand.imageUrl}
                    width={100}
                    height={100}
                    loading='lazy'
                    className=" w-[3rem] sm:w-[5rem] object-contain lg:w-[9rem] xl:w-[11rem] grayscale hover:grayscale-0 hover:transition-all hover:duration-100"
                  />
                   {/* <img  src={brand.imageUrl} alt={brand.imageUrl} className=" w-[3rem] sm:w-[5rem] object-contain lg:w-[9rem] xl:w-[11rem] grayscale hover:grayscale-0 hover:transition-all hover:duration-100"/> */}
               </a>
            )): <Skeleton variant="rectangular" className='w-[100%] lg:h-[20rem] h-[11rem]'/>
        }
      </div>
    </section>
  )
}
