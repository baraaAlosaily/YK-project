import React from 'react'
import Image from 'next/image'

interface Props{
    height:number,
    width:number
}

export default function Logo({height,width}:Props) {
  return (
    <a href="/">
    <Image src="/NavusLogo.svg" alt="logo" width={width} height={height}/>
    </a>
  )
}
