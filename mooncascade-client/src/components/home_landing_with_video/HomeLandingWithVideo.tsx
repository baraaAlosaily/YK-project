import React from 'react'
import LetsTalkButton from '../buttons/LetsTalkButton';

const fixedText={
    mainTitle:"Digital excellence from design to development",
    subTitle:"We will be by your side every step of the way and guide you through the ever-changing digital landscape.",
    question:"Have a project on the horizon?",
    button:"Let\'s talk "
}

export default function HomeLandingWithVideo() {
  return (
    <section className='flex bg-secondary_gray font-primary_font text-primary_white leading-10'>
        <div className='lg:w-6/12 flex flex-col items-start justify-center sm:gap-10 px-5 py-10 gap-6 sm:px-20 w-12/12'>
            <h1 className='text-2xl lg:text-3xl xl:text-5xl'>{fixedText.mainTitle}</h1>
            <h2 className='text-xl lg:text-2xl xl:text-3xl ' >{fixedText.subTitle}</h2>
            <div className='flex gap-5 justify-center items-center w-[100%] sm:w-max'>
                <h3 className='xl:text-xl sm:block hidden'>{fixedText.question}</h3>
                <LetsTalkButton text={fixedText.button}/>
            </div>
        </div>
        <div className='w-6/12 lg:flex hidden'>
              <video className='pr-10' src="/video/myVideo.mp4" autoPlay muted loop></video>
        </div>
    </section>
  )
}
