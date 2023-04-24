/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import Logo from '../../logo/Logo';

const pages = [{
  key:"our-work",
  label:"Our Work",
},{
  key:"services",
  label:"Services",
},
{
  key:"career",
  label:"Career"
},
{
  key:"about-us",
  label:"About Us",
},
{
  key:"contact-us",
  label:"Contact Us",
},{
  key:"blog",
  label:"Blog",
}];

const socialMedia=[
  {
    key:"facebook",
    label:"Facebook",
    link:"https://www.facebook.com/mooncascade",
    icon:"/icons8-facebook.svg"
  },
  {
    key:"twitter",
    label:"Twitter",
    link:"https://twitter.com/mooncascade",
    icon:"/icons8-twitter.svg"
  },
  {
    key:"linkedin",
    label:"Linkedin",
    link:"https://www.linkedin.com/company/mooncascade/",
    icon:"/icons8-linkedin.svg"
  },
  {
    key:"instagram",
    label:"Instagram",
    link:"https://www.instagram.com/mooncascade/",
    icon:"/icons8-instagram.svg"
  },
  {
    key:"youtube",
    label:"Youtube",
    link:"https://www.youtube.com/channel/UCZ1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1",
    icon:"/icons8-youtube.svg"
  }
]

const service=[
  {
    key:"amazon",
    image:'/amazon-service.png',
    link:"https://www.mooncascade.com/amazon-web-services",
    w:104,
    h:122
  },
  {
    key:"google",
    image:'/google-cloud.png',
    link:"https://www.mooncascade.com/google-cloud",
    w:122,
    h:122
  },
  {
    key:'work-transformation',
    image:'/work-transformation.png',
    link:"https://www.mooncascade.com/work-transformation",
    w:122,
    h:122
  },
  {
    key:'pangea',
    image:'/pangea.png',
    link:"https://www.mooncascade.com/pangea",
    w:187,
    h:122
  }

]

function Footer() {
  return (
    <footer className='bg-primary_gray font-primary_font font-semibold text-primary_white sm:text-[1.3rem] text-[1rem] md:px-28 md:py-12 px-10 py-10'>
      <section className='flex'>
        <div className=' md:w-2/12 lg:hidden '>
          <Logo height={130} width={130} />
        </div>
        <div className='flex flex-col pt-3 w-6/12 lg:w-[100%]'>
        <div className='flex justify-between lg:hidden'>
         <div className='flex flex-col gap-2' >
           {
            pages.slice(0, Math.ceil(pages.length / 2)).map(ele=>(
              <a key={ele.key} href={`/${ele.key}`}>{ele.label}</a>
            ))
           }
          </div>
          <div className='flex flex-col gap-2 md:mr-5'>
          {
            pages.slice(Math.ceil(pages.length / 2),pages.length).map(ele=>(
              <a key={ele.key} href={`/${ele.key}`}>{ele.label}</a>
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
            pages.map(ele=>(
              <a key={ele.key} href={`/${ele.key}`}>{ele.label}</a>
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
              socialMedia.map(ele=>(
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
            <a href="https://www.mooncascade.com/privacy-policy">Privacy Policy</a>
          </div>
          <div>
            <a href="https://www.mooncascade.com/cookie-policy">Impressum</a>
          </div>
        </div>
        <div className='hidden lg:block'>
        <ul className='lg:flex items-end gap-9 hidden'>
          {
            service.map(ele=>(
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