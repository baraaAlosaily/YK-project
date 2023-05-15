"use client"
import React, { useState } from "react";
import Post from "../post/Post";
import IPosts from "./posts.model";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
        <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
    <div className="flex items-center flex-col">
       {/* ==========Separator========== */}
      <div className="md:grid md:grid-cols-2 gap-10 lg:grid-cols-3 grid-cols-1">
        {loadingPost.map((post: any) => (
            <Post key={post.id} post={post} />
        ))}
      </div>
        {/* ==========Separator========== */}
      <div>
       {
        pages<posts.length&&(<IconButton onClick={()=>setPages(pages+3)} style={{fontSize:'1rem', marginTop:'2rem' , marginBottom:'2rem', borderRadius:'0'}} aria-label="upload picture" component="label">
           LOADING MORE <KeyboardArrowDownIcon />
        </IconButton>)
       }
      </div>
    </div>
    </div>
  );
}
