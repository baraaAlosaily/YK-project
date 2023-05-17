import BookingButton from '@/components/shared/buttons/BookingButton'
import React from 'react'
import { ISectionThree } from './data.model'

export default function SectionThree({data,handleOpen}:ISectionThree) {
  return (
    <section className=' bg-secondary_white lg:grid lg:grid-cols-6'>
        <section className='lg:col-span-1'></section>
        <section className='lg:col-span-5 md:px-28 md:py-28 px-10 py-10 font-primary_font flex flex-col  gap-10 lg:gap-20'>
        <section>
            <h2 className='text-3xl lg:text-6xl'>
                {data.title}
            </h2>
        </section>
        <section className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center lg:justify-between items-center'>
            <p className='text-xl'>
                {data.content}
            </p>
            <BookingButton handleOpen={handleOpen}/>
        </section>
        </section>
    </section>
  )
}
