import React from 'react'
import Box from '@mui/material/Box'

export default function BookingButton({handleOpen}: {handleOpen:()=>void}) {
  return (
    <Box sx={{ flexGrow: 0 }}>
    <button onClick={handleOpen} className="bg-primary_sky_blue font-primary_font text-primary_white md:py-3 md:px-4 py-2 px-3 rounded-3xl text-sm md:text-md lg:text-[1rem]">Book a Free Consultation</button>
    </Box>
  )
}

