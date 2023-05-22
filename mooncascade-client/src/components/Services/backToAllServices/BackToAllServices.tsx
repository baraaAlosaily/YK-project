"use client"
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function BackToAllServices({data}: any) {
  return (
    <div data-aos="fade-up" className="md:pt-36 md:px-28 md:py-10 px-10 pt-20 font-primary_font flex justify-start gap-3 items-center">
        <ArrowBackIcon className=' text-final_gray text-3xl'/>
        <a href='/services' className='text-final_gray md:text-2xl text-xl'>{data}</a>
    </div>
  )
}
