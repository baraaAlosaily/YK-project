import { Paper, Button } from '@mui/material'
import React from 'react'

export default function Item(props:any) {
  return (
    <Paper>
    <h2>{props.item.name}</h2>
    <p>{props.item.description}</p>

    <Button className="CheckButton">
        Check it out!
    </Button>
   </Paper>
  )
}
