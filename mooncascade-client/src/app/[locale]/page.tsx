"use client";
import { cache, useEffect, useState } from "react";
import Brands from "@/components/Home/brands/Brands";
import HomeLandingWithVideo from "@/components/Home/home_landing_with_video/HomeLandingWithVideo";
import HomeLandingWhatWeCanDo from "@/components/Home/home_landing_what_we_can_do/HomeLandingWhatWeCanDo";
import HomeLandingBookWithVideo from "@/components/Home/home_landing_book_with_video/HomeLandingBookWithVideo";
import HomeLandingCertificates from "@/components/Home/home_landing_certificates/HomeLandingCertificates";
import "aos/dist/aos.css";
import {useTranslations} from 'next-intl';
import Link from "next/link";

const getBrands = cache(async () => {
  const res = await fetch("/api/brands");
  const data = await res.json();
  return data;
});

const getHomeExpand = cache(async (key:string) => {
  const res = await fetch(`/api/homeExpand?param=${key}`);
  const data = await res.json();
  return data;
});

export default function Home({params:{locale}}:any) {
  const t = useTranslations('BrandHomeText');

  const [brands, setBrands] = useState<never[]>([]);
  const [homeExpands, sethomeExpands] = useState<never[]>([]);
  useEffect(() => {
    const fetchAll = async () => {
      const brandsLoc = await getBrands();
      const homeExpandLoc = await getHomeExpand(locale);
      sethomeExpands(homeExpandLoc);
      setBrands(brandsLoc);
    };
    fetchAll();
  }, []);

  return (
    <>
        <HomeLandingWithVideo />
        {/* <div>
          <Link href="de" locale="ar">
             To /fr/another
           </Link>
        </div> */}
        <Brands brands={brands} text={t('title')} />
        <HomeLandingWhatWeCanDo homeExpands={homeExpands} />
        <HomeLandingCertificates data={t('certificateHome')} />
        <HomeLandingBookWithVideo/>
    </>
  )
}
