/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Layout from "@/components/shared/layout/Layout";
import TransformModal from "@/components/shared/transformModal/TransformModal";
import React, { cache, use, useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOSContainer from "@/components/AOS/AOSContainer";
import SectionOne from "@/components/Services/sectionOne/SectionOne";
import Brands from "@/components/Home/brands/Brands";
import data from '../../content/services.json'
import SectionThree from "@/components/OurWork/sectionThree/SectionThree";
import Processes from "@/components/Services/processes/Processes";
import SingleImage from "@/components/Services/singleImage/SingleImage";
import OurServices from "@/components/Services/ourServices/OurServices";


const getClients = cache(async () => {
  const res = await fetch("api/someclients");
  const data = await res.json();
  return data;
});

const getProcesses = cache(async () => {
  const res = await fetch("api/processes");
  const data = await res.json();
  return data;
});

const getOurSercies = cache(async () => {
  const res = await fetch("api/ourServices");
  const data = await res.json();
  return data;
});

function page() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [clients, setClients] = useState<never[]>([]);
  const [processes, setProcesses] = useState<never[]>([]);
  const [ourServices, setOurServices] = useState<never[]>([]);
  useEffect(() => {
    const fetchAll = async () => {
      const clientsLoc = await getClients();
      const processesLoc = await getProcesses();
      const ourServicesLoc = await getOurSercies();
      setOurServices(ourServicesLoc);
      setProcesses(processesLoc);
      setClients(clientsLoc);
    };
    fetchAll();
  }, []);

  return (
    <>
        <SectionOne data={data}/>
        <Brands brands={clients} text={data.someClients} />
        <OurServices data={ourServices} />
        <Processes expandedData={processes} data={data}  />
        <SingleImage data={data} />
        <SectionThree data={data.sectionThree} handleOpen={handleOpen} />
    </>
  );
}

export default page;
