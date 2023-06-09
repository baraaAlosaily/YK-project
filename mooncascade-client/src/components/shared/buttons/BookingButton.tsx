import React,{useContext} from 'react'
import Box from '@mui/material/Box'
import { HandleOpenContext } from "@/app/[locale]/app.layput";
import {useTranslations} from 'next-intl';

export default function BookingButton() {
  const t= useTranslations('BookingButton')
  const handleOpen = useContext(HandleOpenContext);
  return (
    <Box sx={{ flexGrow: 0 }}>
    <button onClick={handleOpen} 
    className="bg-primary_sky_blue font-primary_font text-primary_white py-3 px-4  
    rounded-3xl text-sm md:text-md lg:text-[1rem]">
     {t('title')}</button>
    </Box>
  )
}


