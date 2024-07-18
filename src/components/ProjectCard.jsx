import React from 'react';


export default function ProjectCard({title, imgSrc, imgAlt, description}) {
  return (
    <div className='bg-slate-500 rounded-lg shadow-lg overflow-hidden m-4'>
      <div>
      
      {imgSrc && <img src={imgSrc} alt={imgAlt} className='w-full h-48 object-cover'/>}
      
      <div className='p-2'>
      <h5 className='text-xl font-bold'>{title}</h5>
        <p className='mt-2'>{description}</p>
        </div>

      </div>
    </div>
  )
}
