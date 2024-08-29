import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/UI/Navbar";

import "./styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="mx-auto w-full">
       <main className=" w-full relative">
      <nav className="nav-wrapper ">
        <Navbar />
      </nav>

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
