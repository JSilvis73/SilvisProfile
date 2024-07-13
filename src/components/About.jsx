import React from 'react'
import walkingPic from "../assets/images/walking.jpg"

export default function About() {
  return (
    <div className='bg-blue-500'>
         <h3>Jason Silvis</h3>
        <img src={walkingPic} alt='An image of me!'/>
     <p>This paragraph will be used to talk about me</p>
    </div>
  )
}
