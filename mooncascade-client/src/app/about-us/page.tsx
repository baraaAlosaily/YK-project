/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import HappyImage from "@/components/AboutUs/happyImage/HappyImage";
import Layout from "@/components/shared/layout/Layout";
import about_data from "../../content/about_us.json";
import SectionOne from "@/components/AboutUs/sectionOne/SectionOne";
import SectionTwo from "@/components/AboutUs/sectionTwo/SectionTwo";
import SectionThree from "@/components/AboutUs/sectionThree/SectionThree";
import SectionFive from "@/components/AboutUs/sectionFive/SectionFive";
import SectionSix from "@/components/AboutUs/sectionSix/SectionSix";
import SectionSeven from "@/components/AboutUs/sectionSeven/SectionSeven";
import TransformModal from "@/components/shared/transformModal/TransformModal";
import AOSContainer from "@/components/AOS/AOSContainer";
import "aos/dist/aos.css";

function index() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <AOSContainer>
      <Layout handleOpen={handleOpen}>
        <HappyImage
          image={about_data.landingImage.happy_image}
          alter={about_data.landingImage.happy_image_alt}
        />
        <SectionOne data={about_data.sectionOne} />
        <SectionTwo data={about_data.sectionTwo} />
        <SectionThree data={about_data.sectionThree} />
        <SectionFive data={about_data.sectionFive} />
        <SectionSix data={about_data.sectionSix} />
        <SectionSeven data={about_data.sectionSeven} />
        <TransformModal open={open} handleClose={handleClose} />
      </Layout>
    </AOSContainer>
  );
}

export default index;
