import { HandleOpenContext } from '@/app/[locale]/app.layput';
import React, { useContext } from 'react'
interface Props{
    text:string
}

export default function LetsTalkButton({text}:Props) {
  const handleOpen = useContext(HandleOpenContext);
  return (
    <button onClick={handleOpen} className='bg-primary_sky_blue px-4 py-1 rounded-3xl'>
       {text}
    </button>
  )
}
