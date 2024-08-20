import React from 'react'
import Navbar from '../UI/Navbar'

export default function Wrapper({children}) {
  return (
    <div className='bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600 min-h-screen flex flex-col'>
      <div className='mt-16'>
      <Navbar />
      {children}
      </div>
    </div>
  )
}
