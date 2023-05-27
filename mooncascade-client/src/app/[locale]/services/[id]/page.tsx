"use client"
import React from 'react'
import data from '../../../../content/allServices.json';
import BackToAllServices from '@/components/Services/backToAllServices/BackToAllServices';
import ListOfServices from '@/components/Services/listOfServices/ListOfServices';
import { usePathname } from 'next/navigation';
import ServiceDescription from '@/components/Services/serviceDescription/ServiceDescription';
import ServiceImage from '@/components/Services/serviceImage/ServiceImage';
import ServiceMethod from '@/components/Services/serviceMethod/ServiceMethod';
import ServiceExpands from '@/components/Services/serviceExpands/ServiceExpands';
import SectionThree from '@/components/OurWork/sectionThree/SectionThree';
import OtherWorks from '@/components/shared/otherWorks/OtherWorks';


export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchParams = usePathname();
  const currentData = data.allServices.find((item)=>item.id===searchParams?.split('/')[2]);
  console.log(currentData)


  return (
    <>
       <BackToAllServices data={data.backToAllServices}/>
       <ListOfServices data={data} currentData={currentData}/>
       <ServiceDescription currentData={currentData}/>
       <ServiceImage currentData={currentData}/>
       <ServiceMethod currentData={currentData}/>
       <ServiceExpands currentData={currentData?.expand1}/>
       {
          currentData?.expand2?.title&&
          <ServiceExpands currentData={currentData?.expand2}/>
       }
      <OtherWorks/>
      <SectionThree data={data.footerBar}/>
    </>
  )
}
