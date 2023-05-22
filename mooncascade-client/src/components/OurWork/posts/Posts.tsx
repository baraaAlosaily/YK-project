"use client"
import React, { useState } from "react";
import Post from "../post/Post";
import IPosts from "./posts.model";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Skeleton } from "@mui/material";

export default function Posts({ posts }: IPosts) {
  const [pages, setPages] = useState(3);
  const loadingPost=posts.slice(0,pages);
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="md:px-28 md:pb-28 md:pt-2 px-10 pt-24 pb-10 font-primary_font">
      {/* ==========Separator========== */}
      {/* <div className=" my-5">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
        <MenuItem value="">All</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div> */}
    <div className="flex items-center flex-col">
       {/* ==========Separator========== */}
      <div className="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 flex flex-col gap-20">
        {
        posts.length>0?loadingPost.map((post: any) => (
            <Post key={post.id} post={post} />
        )):<Skeleton variant="rectangular" className='w-[100%] lg:h-[100rem] h-[11rem]'/>

        }
      </div>
        {/* ==========Separator========== */}
      <div>
       {
        pages<posts.length&&( 
        <Button onClick={()=>setPages(pages+3)} style={{fontSize:'1rem', marginTop:'2rem' , marginBottom:'2rem', borderRadius:'0' ,color:'GrayText'}}>
           LOADING MORE <KeyboardArrowDownIcon />
        </Button>)
       }
      </div>
    </div>
    </div>
  );
}
