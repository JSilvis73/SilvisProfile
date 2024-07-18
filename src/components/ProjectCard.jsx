import React from 'react';


export default function ProjectCard({title, imgSrc, imgAlt, description}) {
  return (
    <div className='bg-slate-500 rounded-lg shadow-lg overflow-hidden m-4'>
      <div>
      <h5>{title}</h5>
      {imgSrc && <img src={imgSrc} alt={imgAlt} className='w-full h-48 object-cover'/>}
      
      <div className='p-2'>
        <p>{description}</p>
        </div>

      </div>
    </div>
  )
}
