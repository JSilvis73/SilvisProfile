import React from 'react';
import ProjectCard from './ProjectCard';


export default function Portfolio() {
  return (
    <div className='bg-slate-600 rounded-lg mt-2 p-4 w-full text-white'>
      Portfolio
      <div >
        <ProjectCard title='Jasons Project' imgSrc='' imgAlt='Jasons project here' description='Description of Project' />        
        <ProjectCard title='Jasons Project #2' imgSrc='' imgAlt='Jasons second project here' description='Description of Second Project' />        
      </div>
    </div>
  )
}
