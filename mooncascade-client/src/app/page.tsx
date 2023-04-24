"use client"
import { Inter } from "next/font/google";
import { getBrands } from "./api/brands/route";
import { useEffect, useState } from "react";
import Brands from "@/components/Home/brands/Brands";
import Layout from "@/components/shared/layout/Layout";
import HomeLandingWithVideo from "@/components/Home/home_landing_with_video/HomeLandingWithVideo";
import HomeLandingWhatWeCanDo from "@/components/Home/home_landing_what_we_can_do/HomeLandingWhatWeCanDo";
import HomeLandingBookWithVideo from "@/components/Home/home_landing_book_with_video/HomeLandingBookWithVideo";
import HomeLandingCertificates from "@/components/Home/home_landing_certificates/HomeLandingCertificates";

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
      <HomeLandingWithVideo/>
      <Brands brands={brands}/>
      <HomeLandingWhatWeCanDo/>
      <HomeLandingCertificates/>
      <HomeLandingBookWithVideo/>
    </Layout>
  )
}
