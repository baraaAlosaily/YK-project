import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSContainer({ children }:any) {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>{children}</div>
  )
}
