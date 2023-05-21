import CustomButton from '@/components/shared/buttons/CustomButtton';
import React from 'react';
export default function HomeLandingBookWithVideo({content}:any) {
  return (
    <section data-aos="fade-up" className='md:grid-cols-2 md:grid flex-col gap-10 md:px-28 md:py-28 px-10 py-10 font-primary_font ' >
        <div className='md:col-span-1'>
            <iframe className='w-[100%]' height={500} src='https://www.youtube.com/embed/watch?v=1kFOR98u1-w&list=TLGGeklxM8aCKTExOTA0MjAyMw&t=7s' allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className='flex flex-col justify-between gap-10 md:col-span-1 md:mt-0 mt-10'>
            <h2 className=' text-2xl sm:text-6xl'>{content.homeLandingBookWithVideoTitle}</h2>
            <p className='sm:text-xl'>{content.homeLandingBookWithVideoSubtitle}</p>
            <div>
               <CustomButton content={content.homeLandingBookWithVideoButton} bg='primary_sky_blue' color='primary_white' />
            </div>
        </div>
    </section>
  )
}
