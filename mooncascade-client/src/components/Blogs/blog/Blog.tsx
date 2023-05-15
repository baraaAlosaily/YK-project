import React from 'react'
import IBlog from '../../../../pages/models/blogs.model'

export default function Blog({data}: IBlog) {
  return (
    <div>
        <div>
            <img src={data.imageUrl} alt="" />
        </div>
        <div>
            <h1>{data.title}</h1>
            <div>
                
            </div>
        </div>
    </div>
  )
}
