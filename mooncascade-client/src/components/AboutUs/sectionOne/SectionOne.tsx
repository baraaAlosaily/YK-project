import React from 'react'
import { ISectionOne } from './data.model'
import {useTranslations} from 'next-intl';

export default function SectionOne({data}:ISectionOne) {
  const t = useTranslations('AboutUs')
  return (
    <>
    <div data-aos="fade-up" className='md:px-28 md:py-28 px-10 py-10 font-primary_font flex flex-col gap-10'>
       <div className='lg:grid lg:grid-cols-5 gap-4'>
        <p className='lg:col-span-1 hidden lg:block'></p>
        <h1 className='lg:col-span-4 md:text-6xl text-3xl'>{t(`${data.title}`)}</h1>
       </div> 
       <div className='md:grid md:grid-cols-5 gap-4 flex flex-col border-b-2 border-gray-200 pb-32'>
        <p className='md:col-span-1 md:text-2xl text-lg'>{t(`${data.subTitle}`)}</p>
        <div className='md:col-span-4 flex flex-col gap-3'>
         {
            t(`${data.description}`).split('<br />').map((ele: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,i: React.Key | null | undefined)=>(
                <p key={i} className='md:text-xl text-[1rem]'>{ele}</p>
            ))
         }
        </div>
       </div>
    </div>
    </>
  )
}
