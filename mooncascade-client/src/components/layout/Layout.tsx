import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Props } from 'next/script';

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
