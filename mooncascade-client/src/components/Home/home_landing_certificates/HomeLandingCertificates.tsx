import React from 'react';
import certificate from '../../../content/certificate.json';

export default function HomeLandingCertificates() {
  return (
    <section className='md:px-28 md:py-28 px-10 py-10 font-primary_font text-xl md:text-[1.3rem] flex gap-10 lg:justify-between flex-col sm:flex-row'>
        <div>
            <p>{certificate.description}</p>
        </div>
        <div className='grid grid-cols-2 lg:flex lg:justify-between  md:w-[50%] lg:w-[75%]'>
            {certificate.images.map((image)=>{
                return(
                    <div key={image.name}>
                        <img className='object-contain lg:w-[15rem]' src={image.url} alt={image.name}/>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
