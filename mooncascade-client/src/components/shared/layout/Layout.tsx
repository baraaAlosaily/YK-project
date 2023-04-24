import React from 'react';
import Navbar from './navbar/Navbar';
import { Props } from 'next/script';
import Footer from './footer/Footer';

export default function Layout({children}:Props) {
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
