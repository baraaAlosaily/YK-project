import React from 'react';
import classNames from 'classnames';

interface Props{
    content:string;
    bg:string;
    color:string;
}

export default function CustomButton({content,bg,color}:Props) {
    const classes = classNames({ 
        [`bg-${bg}`]: bg,
        [`text-${color}`]: color,
        'rounded-3xl': true,
        'px-6': true,
        'py-3': true,
        'text-[1rem]':true,
    });
  return (
    <button className={classes}>
        {content}
    </button>
  )
}
