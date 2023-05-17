"use client";
import { cache, useEffect, useState } from "react";
import Brands from "@/components/Home/brands/Brands";
import Layout from "@/components/shared/layout/Layout";
import HomeLandingWithVideo from "@/components/Home/home_landing_with_video/HomeLandingWithVideo";
import HomeLandingWhatWeCanDo from "@/components/Home/home_landing_what_we_can_do/HomeLandingWhatWeCanDo";
import HomeLandingBookWithVideo from "@/components/Home/home_landing_book_with_video/HomeLandingBookWithVideo";
import HomeLandingCertificates from "@/components/Home/home_landing_certificates/HomeLandingCertificates";
import TransformModal from "@/components/shared/transformModal/TransformModal";
import AOSContainer from "@/components/AOS/AOSContainer";
import "aos/dist/aos.css";
import data from "../content/media.json"

const getBrands = cache(async () => {
  const res = await fetch("api/brands");
  const data = await res.json();
  return data;
});

const getHomeExpand = cache(async () => {
  const res = await fetch("api/homeExpand");
  const data = await res.json();
  return data;
});

export default function Home({}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [brands, setBrands] = useState<never[]>([]);
  const [homeExpands, sethomeExpands] = useState<never[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      const brandsLoc = await getBrands();
      const homeExpandLoc = await getHomeExpand();
      sethomeExpands(homeExpandLoc);
      setBrands(brandsLoc);
    };
    fetchAll();
  }, []);

  return (
    <AOSContainer>
      <Layout handleOpen={handleOpen}>
        <HomeLandingWithVideo />
        <Brands brands={brands} text={data.barnds} />
        <HomeLandingWhatWeCanDo homeExpands={homeExpands} />
        <HomeLandingCertificates />
        <HomeLandingBookWithVideo />
        <TransformModal open={open} handleClose={handleClose} />
      </Layout>
    </AOSContainer>
  );
}
