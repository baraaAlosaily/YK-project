/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import Logo from '../../logo/Logo';
import media from '../../../../content/media.json'
import {useTranslations} from 'next-intl';

function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className='bg-primary_gray font-primary_font font-semibold text-primary_white sm:text-[1.3rem] text-[1rem] md:px-28 md:py-12 px-10 py-10'>
      <section className='flex flex-col'>
        <div className=' md:w-2/12 lg:hidden '>
          <Logo height={130} width={130} />
        </div>
        <div className='flex flex-col pt-3 w-12/12 lg:w-[100%]'>
        <div className='flex justify-between lg:hidden'>
         <div className='flex flex-col gap-2' >
           {
            media.pages.slice(0, Math.ceil(media.pages.length / 2)).map(ele=>(
              <a key={ele.key} href={`/${ele.key}`}>{t(`${ele.key}`)}</a>
            ))
           }
          </div>
          <div className='flex flex-col gap-2 md:mr-5'>
          {
            media.pages.slice(Math.ceil(media.pages.length / 2),media.pages.length).map(ele=>(
              <a key={ele.key} href={`/${ele.key}`}>{t(`${ele.key}`)}</a>
            ))
           }
          </div>
        </div>
        <div className='hidden lg:flex justify-between items-center'>
         <div >
          <Logo height={200} width={200} />
         </div>
         <div className='flex justify-around w-10/12'>
          {
            media.pages.map(ele=>(
              <a key={ele.key} href={`/${ele.key}`}>{t(`${ele.key}`)}</a>
            ))
           }
          </div>
        </div>
        <div className='md:flex justify-between py-10 lg:pt-24'>
        <div>
        <div className='flex flex-col gap-4'>
          <a className='block underline' href="contact@mooncascade.com">contact@mooncascade.com</a>
          <a className='block underline' href="tel:+372 504 5119">+372 504 5119</a>
          <div className='flex gap-6'>
            {
              media.socialMedia.map(ele=>(
                <a key={ele.key} href={ele.link}>
                  <Image src={ele.icon} alt={ele.key} width={30} height={30}/>
                </a>
              ))
            }
          </div>
        </div>
        </div>
        <div className='flex justify-between md:flex-col md:justify-end gap-5'>
          <div>
            <a href="https://www.mooncascade.com/privacy-policy">{t('privacyPolicy')}</a>
          </div>
          <div>
            <a href="https://www.mooncascade.com/cookie-policy">{t('impressum')}</a>
          </div>
        </div>
        <div className='hidden lg:block'>
        <ul className='lg:flex items-end gap-9 hidden'>
          {
            media.service.map(ele=>(
              <li key={ele.key}>
                <a href={ele.link} target='_blank'>
                  <img src={ele.image} alt={ele.key} className={`w-[${ele.w}px] h-[122px]`} />
                </a>
              </li>
            ))
          }
        </ul>
       </div>
        </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer