import React from 'react';
import ProjectCard from './ProjectCard';
import walkingPic from "../assets/images/walking.jpg"

const Portfolio = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <ProjectCard 
            title="Jason's Project" 
            imgSrc={walkingPic}
            imgAlt="Jason's project here" 
            description="Description of Project" 
          />
          <ProjectCard 
            title="Jason's Project #2" 
            imgSrc="path/to/your/image2.jpg" 
            imgAlt="Jason's second project here" 
            description="Description of Second Project" 
          />
             <ProjectCard 
            title="Jason's Project #3" 
            imgSrc="path/to/your/image2.jpg" 
            imgAlt="Jason's second project here" 
            description="Description of Second Project" 
          />
         
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
