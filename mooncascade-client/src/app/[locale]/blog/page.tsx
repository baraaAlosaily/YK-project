/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Blogs from "@/components/Blogs/blogs/Blogs";
import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import data from "@/content/blogs.json";
import SectionOne from "@/components/Blogs/sectionOne/SectionOne";

const getBlogs = async () => {
  const res = await fetch("/api/blogs");
  const data = await res.json();
  return data;
};

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const blogs = await getBlogs();
      setBlogs(blogs);
    };
    fetchAll();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const handlePageChange = (event: any, page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };


  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(blogs.length / itemsPerPage);


  return (
    <>
    {/* <Layout handleOpen={handleOpen}> */}
      <SectionOne data={data}/>
      <Blogs data={getPageData()} />
      <div className="md:px-28 px-10 font-primary_font flex justify-center mb-10" >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
      {/* {recordMap&&<NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />}        */}
    </>
  );
}

export default page;
