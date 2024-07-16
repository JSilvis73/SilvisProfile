import React from 'react';
import ProjectCard from './ProjectCard';


export default function Portfolio() {
  return (
    <div>
      Portfolio
      <div>
        <ProjectCard title='Jasons Project' imgSrc='' imgAlt='Jasons project here' description='Description of Project' />        
        <ProjectCard title='Jasons Project #2' imgSrc='' imgAlt='Jasons second project here' description='Description of Second Project' />        
      </div>
    </div>
  )
}
