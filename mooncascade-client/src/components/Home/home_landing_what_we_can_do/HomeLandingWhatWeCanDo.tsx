import React from 'react';
import Expand from '../../shared/Expand/Expand';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const content={
    title:"What we can do for you",
    description:"Whether going through the first phase of mapping out the MVP or developing a back-end for your core product, our team is ready to support you with expert UX/UI design, software development, and cloud modernization."
}

interface Props{
    homeExpands:any[],
}

export default function HomeLandingWhatWeCanDo({homeExpands}: Props) {
  return (
    <section className='flex flex-col items-center justify-center gap-10 md:px-28 md:py-28 px-10 py-10 font-primary_font'>
        <div className='flex flex-col items-center justify-center gap-10'>
            <h2 className=' text-2xl md:text-4xl lg:text-6xl'>{content.title}</h2>
            <p className='max-w-3xl text-[1rem] lg:text-xl lg:leading-8'>{content.description}</p>
        </div>
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-5'>
            <div className='flex flex-col justify-between'> 
                <Expand expandedData={homeExpands} w={'33%'}/>
                <a href="" className='flex gap-2 mt-10 lg:my-0'>
                  <span>SEE ALL SERVICES</span>
                  <span className='lg:block hidden'><ArrowForwardIcon/></span> 
               </a>
            </div>
            <div className='hidden lg:block'>
               <Image src={'/curosal/two.jpg'} alt='image' height={700} width={800}/>
            </div>
        </div>
    </section>
  )
}
