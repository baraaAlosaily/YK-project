import LetsTalkButton from '@/components/shared/buttons/LetsTalkButton'
import React from 'react'
import {useTranslations} from 'next-intl'

export default function HomeLandingWithVideo() {
  const t = useTranslations('FixedText')
  return (
    <section data-aos="fade-up" className='flex bg-secondary_gray font-primary_font text-primary_white leading-10'>
        <div className='lg:w-6/12 flex flex-col items-start justify-center sm:gap-10 px-5 py-10 gap-6 sm:px-20 w-12/12 mt-20'>
            <h1 className='text-2xl lg:text-3xl xl:text-5xl'>{t('mainTitle')}</h1>
            <h2 className='text-xl lg:text-2xl xl:text-3xl ' >{t('subTitle')}</h2>
            <div className='flex gap-5 justify-center items-center w-[100%] sm:w-max'>
                <h3 className='xl:text-xl sm:block hidden'>{t('question')}</h3>
                <LetsTalkButton text={t('button')}/>
            </div>
        </div>
        <div className='w-6/12 lg:flex hidden'>
              <video className='pr-10' src="/video/myVideo.mp4" autoPlay muted loop></video>
        </div>
    </section>
  )
}
