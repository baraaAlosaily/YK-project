"use client"
import AOSContainer from '@/components/AOS/AOSContainer';
import Layout from '@/components/shared/layout/Layout';
import TransformModal from '@/components/shared/transformModal/TransformModal';
import React from 'react'

export const HandleOpenContext = React.createContext<any>(null);

const AppLayout = (props: any) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>   
        <HandleOpenContext.Provider value={handleOpen}>
            <AOSContainer>
            <Layout>
             {props.children}
            <TransformModal open={open} handleClose={handleClose} />
            </Layout>
            </AOSContainer>
        </HandleOpenContext.Provider>

    </div>
  )
}

export default AppLayout;