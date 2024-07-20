import React, { useState, useEffect } from 'react';
import walkingPic from "../assets/images/walking.jpg";

export default function About() {
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      // Trigger flicker
      setIsFlickering(true);
      setTimeout(() => setIsFlickering(false), 50); // Flicker duration (0.05 seconds)

      // Reset flicker every 10 to 15 seconds
    }, Math.random() * 5000 + 10000); // Random interval between 10-15 seconds

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <div className={`about-container ${isFlickering ? 'flicker' : ''}`}>
      <div className='container mx-auto p-4'>
        <h3 className='text-3xl font-bold'>Jason Silvis</h3>
        <img className='size-60' src={walkingPic} alt='An image of me!'/>
        <p>This paragraph will be used to talk about me</p>
      </div>
    </div>
  );
}
