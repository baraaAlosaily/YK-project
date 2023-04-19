import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'

const items=[
    {
        id:1,
        image:""
    },
    {
        id:2,
        image:""
    }
]

export default function Curosel() {
  return (
    <Carousel>
    {
        items.map( (item, i) => <Item key={i} item={item} /> )
    }
    </Carousel>
  )
}
