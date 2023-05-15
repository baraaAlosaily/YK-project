import React from 'react'
import Box from '@mui/material/Box'

export default function SmallBookingButton({handleOpen}: {handleOpen:()=>void}) {
  return (
    <Box sx={{ flexGrow: 0 }}>
    <button onClick={handleOpen} className="bg-primary_sky_blue font-primary_font min-w-max text-primary_white py-2 px-3 rounded-3xl text-sm">Book a Free Consultation</button>
    </Box>
  )
}
