import React,{useContext} from 'react';
import classNames from 'classnames';
import { HandleOpenContext } from "../../../../src/app/layout";



interface Props{
    content:string;
    bg:string;
    color:string;
}

export default function CustomButton({content,bg,color}:Props) {
  const handleOpen = useContext(HandleOpenContext);
    const classes = classNames({ 
        [`bg-${bg}`]: bg,
        [`text-${color}`]: color,
        'rounded-3xl': true,
        'px-6': true,
        'py-3': true,
        'text-[1rem]':true,
    });
  return (
    <button className={classes} onClick={handleOpen}>
        {content}
    </button>
  )
}
