import React from 'react'

interface Props{
    width:number,
    height:number
}

export default function RightArrow({width,height}:Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.869 5.69-1.06 1.06 4.5 4.5H.75v1.5h19.558l-4.5 4.5 1.061 1.06 6.31-6.31-6.31-6.31Z" fill="currentColor"></path></svg>
  )
}
