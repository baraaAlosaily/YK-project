import React from 'react';
import Navbar from './navbar/Navbar';
import { Props } from 'next/script';
import Footer from './footer/Footer';

type MyComponentProps = {
  children: React.ReactNode;
  handleOpen: () => void;
};

export default function Layout({ children, handleOpen }: MyComponentProps) {
  
  return (
    <>
     <Navbar handleOpen={handleOpen}/>
     <main>
        {children}
     </main>
     <Footer/>
    </>
  )
}
