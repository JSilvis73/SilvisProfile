import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/UI/Navbar";
import Skills from "../components/Skills";
import codeVid from "../assets/videos/codingvid.mp4";
import "./styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="container mx-auto w-full p-4 ">
      <nav className="nav-wrapper ">
        <Navbar />
      </nav>

      <main className="mt-16 w-full relative">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover "
            src={codeVid} 
            autoPlay
            loop
            muted
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col text-white min-h-screen justify-center items-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">Home</p>
        </div>
      </main>
      <div id="footer" className="footer-wrapper ">
        <Footer />
      </div>
    </div>
  );
}
