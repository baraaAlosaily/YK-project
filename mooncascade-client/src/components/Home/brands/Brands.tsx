import React from 'react'

interface Props{
    brands:any[]
}
export default function Brands({brands}:Props) {
  return (
    <section className=" flex flex-col lg:grid lg:grid-cols-3 gap-10 md:px-28 md:py-28 px-10 py-10 font-primary_font text-xl md:text-[1.3rem]">
      <div className="lg:col-span-1 ">Clients we&#39;ve worked with</div>
      <div className="lg:col-span-2 flex flex-wrap gap-8 sm:gap-14">
        {
           brands.length>0&&brands.map((brand:any)=>(
               <a key={brand.id} href="">
                   <img src={brand.imageUrl} alt={brand.imageUrl} className=" w-[3rem] sm:w-[5rem] object-contain lg:w-[9rem] xl:w-[11rem] grayscale hover:grayscale-0 hover:transition-all hover:duration-100"/>
               </a>
            ))
        }
      </div>
    </section>
  )
}
