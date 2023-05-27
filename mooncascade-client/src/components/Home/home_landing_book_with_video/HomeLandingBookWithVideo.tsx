import CustomButton from '@/components/shared/buttons/CustomButtton';
import {useTranslations} from 'next-intl'
import React from 'react';
export default function HomeLandingBookWithVideo() {
  const t = useTranslations('VideoHome')
  return (
    <section data-aos="fade-up" className='md:grid-cols-2 md:grid flex-col gap-10 md:px-28 md:py-28 px-10 py-10 font-primary_font ' >
        <div className='md:col-span-1'>
            <iframe className='w-[100%]' height={500} src="https://www.youtube.com/embed/1kFOR98u1-w?modestbranding=1&rel=0&mute=1&controls=0&showinfo=0&autoplay=1&loop=1&playlist=1kFOR98u1-w&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fwww.mooncascade.com&widgetid=1"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className='flex flex-col justify-between gap-10 md:col-span-1 md:mt-0 mt-10'>
            <h2 className=' text-2xl sm:text-6xl'>{t('title')}</h2>
            <p className='sm:text-xl'>{t('description')}</p>
            <div>
               <CustomButton content={t('button')} bg='primary_sky_blue' color='primary_white' />
            </div>
        </div>
    </section>
  )
}
