import React from "react";
import walkingPic from "../assets/images/walking.jpg";

export default function About() {
  return (
    <div className="bg-slate-600 rounded-lg text-white m-4 p-4 shadow-lg">
      <div className="container mx-auto p-4">
        <h3 className="text-3xl font-bold mb-4">Jason Silvis</h3>
        <div className="flex flex-col md:flex-row items-center">
          <img
            className="w-48 h-48 rounded-full md:mr-8"
            src={walkingPic}
            alt="An image of me!"
          />
          <p className="text-lg leading-relaxed">This paragraph will be used to talk about me</p>
        </div>
      </div>
    </div>
  );
}
