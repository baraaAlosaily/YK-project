import React from 'react';

const home_landing_certificates={
    description:"We're proudly certified as",
    images:[
        {
            name:"aws",
            url:"/amazon-service.png"
        },
        {
            name:"google",
            url:"/google-cloud.png"
        },
        {
            name:"transform",
            url:"/work-transformation.png"
        },
        {
            name:"pangea",
            url:"/pangea.png"
        }
    ]
}

export default function HomeLandingCertificates() {
  return (
    <section className='md:px-28 md:py-28 px-10 py-10 font-primary_font text-xl md:text-[1.3rem] flex gap-10 lg:justify-between flex-col sm:flex-row'>
        <div>
            <p>{home_landing_certificates.description}</p>
        </div>
        <div className='grid grid-cols-2 lg:flex lg:justify-between  md:w-[50%] lg:w-[75%]'>
            {home_landing_certificates.images.map((image)=>{
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
