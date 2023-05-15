/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Layout from '@/components/shared/layout/Layout'
import TransformModal from '@/components/shared/transformModal/TransformModal';
import React, { useState } from 'react'

function page() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Layout  handleOpen={handleOpen} >
        <div>Service</div>
        <TransformModal open={open} handleClose={handleClose} />
    </Layout>
  )
}

export default page