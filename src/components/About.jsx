import React, { useState, useEffect } from "react";
import walkingPic from "../assets/images/walking.jpg";

export default function About() {
  // const [isFlickering, setIsFlickering] = useState(false);

  // useEffect(() => {
  //   const normalDuration = 100000; // 10 seconds of normal state
  //   const flickerDuration = 1000; // Flicker lasts for 1 second

  //   const flickerInterval = setInterval(() => {
  //     setIsFlickering(true);

  //     // Stop flickering after a short duration
  //     setTimeout(() => setIsFlickering(false), flickerDuration);

  //     // Continue to flicker at regular intervals
  //   }, normalDuration + flickerDuration); // Start flickering after normal duration

  //   return () => clearInterval(flickerInterval);
  // }, []);

  return (
    <div className="">
      <div className="container mx-auto m-2 p-4 bg-scifi/50 rounded-lg bg-glow text-white">
      <h3 className="text-3xl font-bold">Jason Silvis</h3>
        <div className="flex flex-col md:flex-row">
          <img className="size-60 " src={walkingPic} alt="An image of me!" />
          <p>This paragraph will be used to talk about me</p>
        </div>
      </div>
    </div>
  );
  //className={`about-container ${isFlickering ? 'flicker' : 'normal'}`}
}
