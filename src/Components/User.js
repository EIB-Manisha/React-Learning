import React, { useState } from 'react'

const User = ({name}) => {
    const[count]= useState(0);
  return (
    <div className='m-4 p-4 rounded-lg bg-green-300 border-solid'>
        <h2>Name:{name}</h2>
        <h2>{count}</h2>
        <h2>Location:Dehradun</h2>
        <h2>Contact:@abc</h2>



    </div>
  )
}

export default User