import React from 'react';
import ProjectCard from './ProjectCard';
import walkingPic from "../assets/images/walking.jpg"

const Portfolio = () => {
  return (
    <div className="container mx-auto m-2 p-4 bg-scifi/50 rounded-lg bg-glow text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
         
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
