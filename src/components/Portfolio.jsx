import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <div className="bg-slate-600 rounded-lg mt-2 p-4 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard 
            title="Jason's Project" 
            imgSrc="path/to/your/image.jpg" 
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
