"use client"
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import HomeLandingWithVideo from "@/components/home_landing_with_video/HomeLandingWithVideo";
import { getBrands } from "./api/brands/route";
import { useEffect, useState } from "react";
import Brands from "@/components/brands/Brands";
import Home_landing_what_we_can_do from "@/components/home_landing_what_we_can_do/HomeLandingWhatWeCanDo";

export default function Home({}) {
  const [brands, setBrands] = useState<never[]>([])
  useEffect(() => {
    const fetchBrands = async () => {
      const res= await getBrands()
      console.log(res.data.data)
      setBrands(res.data.data);
      console.log(brands);
    }
    fetchBrands()
  }, [])
  
  return (
    <Layout>
      {/* {brands.length>0&&brands.map((res:any)=>(
        <div key={res.id}>
          <h1>{res.attributes.url}</h1>
        </div>
      ))} */}
      <HomeLandingWithVideo/>
      <Brands brands={brands}/>
      <Home_landing_what_we_can_do/>
    </Layout>
  )
}
