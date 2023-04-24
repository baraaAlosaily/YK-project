import React from 'react'
interface Props{
    text:string
}

export default function LetsTalkButton({text}:Props) {
  return (
    <button className='bg-primary_sky_blue px-4 py-1 rounded-3xl'>
       {text}
    </button>
  )
}
