"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { InlineWidget } from 'react-calendly';
import { Button } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height:'100%',
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24
  };

export default function TransformModal({open,handleClose}: {open:boolean,handleClose:()=>void}) {
  const [formToggle, setFormToggle] = useState(false);
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
        <section>
           <section className=' bg-primary_sky_blue w-[100%] h-[15rem] grid grid-cols-12 p-10 font-primary_font'>
             <div className='flex flex-col gap-10 col-span-11'>
                <h2 className='text-3xl md:text-6xl'>How can we help?</h2>
                <p>Whether you’re looking for an end-to-end solution, or a natural extension to your existing in-house setup—we’ve got you covered!</p>
             </div>
             <div className='col-span-1 flex justify-end'>
               <span className='cursor-pointer' onClick={handleClose}><CloseIcon fontSize='large'/></span>
             </div>
           </section>
           <section>
             <div className=' flex justify-center items-center gap-4 py-10'>
               <Button onClick={()=>setFormToggle(false)} sx={{textTransform: 'none'}} className='hover:bg-primary_gray bg-primary_gray text-white rounded-3xl px-10 py-3' >Book a consultaion</Button>
               <Button onClick={()=>setFormToggle(true)} sx={{textTransform: 'none'}} className='hover:bg-primary_white bg-primary_white text-black rounded-3xl px-10 py-3'>Send us a message</Button>
             </div>
             <div>
              {
                formToggle?(<div className='flex flex-col gap-5 mx-40'>
                  <input className='border-2 border-gray-200 rounded-1xl px-10 py-3' type="text" placeholder='Name'/>
                  <input className='border-2 border-gray-200 rounded-1xl px-10 py-3' type="text" placeholder='Email'/>
                  <input className='border-2 border-gray-200 rounded-1xl px-10 py-3' type="text" placeholder='Phone'/>

                  <Button sx={{textTransform: 'none'}} className='bg-primary_gray text-white rounded-1xl px-10 py-3' >Send</Button>
                </div>):(<InlineWidget url="https://calendly.com/baraaosaly" />)
              }
             </div>
           </section>
        </section>
    </Box>
   </Modal>
  )
}
