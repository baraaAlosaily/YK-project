"use client"
import Blogs from '@/components/Blogs/blogs/Blogs';
import Layout from '@/components/shared/layout/Layout'
import TransformModal from '@/components/shared/transformModal/TransformModal';
import React, { useEffect, useState } from 'react';
// import { NotionRenderer } from 'react-notion-x';
// // core styles shared by all of react-notion-x (required)
// import 'react-notion-x/src/styles.css'

// // used for code syntax highlighting (optional)
// import 'prismjs/themes/prism-tomorrow.css'

// // used for rendering equations (optional)
// import 'katex/dist/katex.min.css'


// const getRenderedPage = async () => {
//   const res = await fetch("http://localhost:3001/api/test");
//   const data = await res.json();
//   return data;
// }

const getBlogs = async () => {
  const res = await fetch("http://localhost:3001/api/blogs");
  const data = await res.json();
  return data;
}

function page() {
  const [blogs, setBlogs] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [recordMap, setRecordMap] = useState(null)

  // React.useEffect(() => {
  //   const fetchAll = async () => {
  //     const recordMapLoc = await getRenderedPage();
  //     setRecordMap(recordMapLoc);
  //   }
  //   fetchAll()
  // }, [])

  useEffect(() => {
    const fetchAll = async () => {
      const blogs = await getBlogs();
      setBlogs(blogs);
    }
    fetchAll()
  }, [])

  return (
    <Layout handleOpen={handleOpen}>
         <Blogs data={blogs}/>
         {/* {recordMap&&<NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />}        */}
         <TransformModal open={open} handleClose={handleClose} />
    </Layout>
  )
}

export default page