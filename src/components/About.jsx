import React, { useState, useEffect } from "react";
import walkingPic from "../assets/images/walking.jpg";

import "./styles/About.css";

export default function About() {
  return (
    <div className="">
      <div className="container mx-auto  p-4 bg-scifi/50 rounded-lg bg-glow text-white text-center  backgroundPattern">
        <h3 className="text-3xl font-bold">Hello!</h3>
        <h3 className="text-3xl font-bold">My name is Jason Silvis</h3>
        <div className="flex flex-col md:flex-row mt-4 gap-4 items-center">
          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <img className="hexagon" src={walkingPic} alt="An image of me!" />
          </div>
          <div>
          <p className="bg-slate-500/95 rounded-lg p-2 border-2 border-black">
            I’m someone who’s always enjoyed diving deep into the things that
            spark my curiosity, whether it’s exploring strategy games that push
            me to think creatively or spending time outdoors tending to my
            garden. My journey has taken me through many paths, including
            working extensively in the healthcare industry, where I honed my
            skills in communication and problem-solving.
          </p>
          <p className="bg-slate-500/95 rounded-lg p-2 border-2 border-black mt-4">
          Amidst all these
            experiences, I discovered a passion for coding, where I found a
            perfect blend of creativity, logic, and the thrill of building
            something from the ground up. For me, coding is another way to
            strategize, plan, and bring ideas to life, just like in the games
            and hobbies I’ve always loved.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
