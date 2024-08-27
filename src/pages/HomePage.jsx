import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/UI/Navbar";
import Skills from "../components/Skills";
import codeVid from '../assets/videos/codingvid.mp4'
import "./styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="container mx-auto w-full p-4 ">
         
            <nav className="nav-wrapper ">
        <Navbar />
      </nav>


      <main className="mt-16 ">
        <div className="flex flex-col text-white min-h-screen w-screen justify-center align-center">
          
      <video 
      className="top-0"
      src={codeVid}
      autoPlay
      loop
      muted
      />
          
          <p>
          Home
          </p>
        </div>
      </main>
      <div id="footer" className="footer-wrapper ">
        <Footer />
      </div>
    </div>
  );
}
