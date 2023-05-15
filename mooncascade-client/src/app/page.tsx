"use client"
import { useEffect, useState } from "react";
import Brands from "@/components/Home/brands/Brands";
import Layout from "@/components/shared/layout/Layout";
import HomeLandingWithVideo from "@/components/Home/home_landing_with_video/HomeLandingWithVideo";
import HomeLandingWhatWeCanDo from "@/components/Home/home_landing_what_we_can_do/HomeLandingWhatWeCanDo";
import HomeLandingBookWithVideo from "@/components/Home/home_landing_book_with_video/HomeLandingBookWithVideo";
import HomeLandingCertificates from "@/components/Home/home_landing_certificates/HomeLandingCertificates";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TransformModal from "@/components/shared/transformModal/TransformModal";
import { BASE_URL } from "@/constants/api";


const getBrands=async()=>{
  const res = await fetch(BASE_URL+"/brands");
  const data = await res.json();
  return data;
}

const getHomeExpand=async()=>{
  const res = await fetch(BASE_URL+"/homeExpand");
  const data = await res.json();
  return data;
}

export default function Home({}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [brands, setBrands] = useState<never[]>([])
  const [homeExpands, sethomeExpands] = useState<never[]>([])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
    });

    const fetchAll = async () => {
      const brandsLoc= await getBrands();
      const homeExpandLoc= await getHomeExpand();
      sethomeExpands(homeExpandLoc);
      setBrands(brandsLoc);
    }
    fetchAll()
  }, [])
  
  return (
    <Layout handleOpen={handleOpen}>
      <HomeLandingWithVideo/>
      <Brands brands={brands}/>
      <HomeLandingWhatWeCanDo homeExpands={homeExpands}/>
      <HomeLandingCertificates/>
      <HomeLandingBookWithVideo/>
      <TransformModal open={open} handleClose={handleClose} />
    </Layout>
  )
}
