import React from 'react'

export default function ProjectCard({title, imgSrc, imgAlt, description}) {
  return (
    <div className=''>
      <h5>{title}</h5>
      <img src={imgSrc} alt={imgAlt} />
      <p>{description}</p>
    </div>
  )
}
