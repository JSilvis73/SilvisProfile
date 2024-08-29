import React from 'react'
import Navbar from '../UI/Navbar';
import codeVid from "../../assets/videos/codingvid.mp4";

export default function Wrapper({children}) {
  return (
    <div className='relative  min-h-screen flex flex-col'>
      <div className='mt-16'>
      <Navbar />
      
     
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src={codeVid} 
            autoPlay
            loop
            muted
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
        </div>

        {/* Content */}
        
        <div className='relative'>
      {children}
     
      </div>
      </div>
    </div>
  )
}
