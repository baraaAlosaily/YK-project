import React from "react";
import Service from "./service/Service";
import { Skeleton } from "@mui/material";

export default function OurServices({data}:any) {
  const number = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section
      data-aos="fade-up"
      className="md:px-28 md:py-28 px-10 py-10 font-primary_font flex flex-col"
    >
      <div className="md:grid grid-cols-8 flex flex-col md:mb-10 mb-5">
        <p className="col-span-2 text-[1.3rem] my-10">
          See all our services
        </p>
        <div className="col-span-6">
            {
                data.length>0?data.map((item:any,index:number)=>(
                    <Service key={index} data={item}/>
                )):(
                    number.map((item:number,index:number)=>(
                      <Skeleton key={index} variant="rectangular" className='w-[100%] lg:h-[20rem] h-[11rem] mt-5'/>
                    ))
                )
            }
        </div>
      </div>
    </section>
  );
}
