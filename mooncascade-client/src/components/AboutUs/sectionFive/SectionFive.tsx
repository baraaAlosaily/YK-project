"use client"
import React from 'react'
import { ISectionFive } from './data.model'
import {useTranslations} from 'next-intl'
import Expand from '@/components/shared/ExpandStatic/Expand'

export default function SectionFive({data}:ISectionFive) {
  const t = useTranslations('AboutUs')
  return (
    <section data-aos="fade-up" className='flex flex-col md:px-28 md:py-28 px-10 py-10 font-primary_font'>
      <div className='my-10 flex md:items-center md:justify-center'>
        <h2 className='text-xl md:text-5xl'>{t(`${data.title}`)}</h2>
      </div>
      <div className='flex flex-col gap-5 md:flex-row'>
        <div>
          <p>{t(`${data.subTitle}`)}</p>
        </div>
        <div>
          <Expand w={'80%'} expandedData={data.awards}/>
        </div>
      </div>
    </section>
  )
}
