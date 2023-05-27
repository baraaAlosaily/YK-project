import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import { HandleOpenContext } from '@/app/[locale]/app.layput';
import {useTranslations} from 'next-intl';

export default function SmallBookingButton() {
  const t = useTranslations('BookingButton')
  const handleOpen = useContext(HandleOpenContext);
  return (
    <Box sx={{ flexGrow: 0 }}>
         <button onClick={handleOpen}
          className="bg-primary_sky_blue font-primary_font
           min-w-max text-primary_white py-2 px-3
            rounded-3xl text-sm">{t('title')}</button>
    </Box>
  )
}
