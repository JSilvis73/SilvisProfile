import React from 'react'
import walkingPic from "../assets/images/walking.jpg"

export default function About() {
  return (
    <div className='bg-slate-600 rounded-lg text-white m-4 p-4'>
      <div className='container mx-auto'>
         <h3 className='text-3xl font-bold'>Jason Silvis</h3>
        <img className='size-60' src={walkingPic} alt='An image of me!'/>
     <p>This paragraph will be used to talk about me</p>
     </div>
    </div>
  )
}
