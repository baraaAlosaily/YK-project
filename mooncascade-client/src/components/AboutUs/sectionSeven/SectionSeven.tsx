import React from 'react'
import { ISectionSeven } from './data.model'

export default function SectionSeven({data}:ISectionSeven) {
  return (
    <section className='md:px-28 md:py-28 px-10 py-10'>
        <div className='bg-gray'>
          <img src={data.img} alt={data.img} />
        </div>
    </section>
  )
}
