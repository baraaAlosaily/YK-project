import React from 'react';
import Navbar from './navbar/Navbar';
import { Props } from 'next/script';
import Footer from './footer/Footer';

type MyComponentProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: MyComponentProps) {
  
  return (
    <>
     <Navbar/>
     <main>
        {children}
     </main>
     <Footer/>
    </>
  )
}
