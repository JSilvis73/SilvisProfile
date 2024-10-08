import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/UI/Navbar";

import "./styles/HomePage.css";
import About from "../components/About";
import Wrapper from "../components/primitive/Wrapper";
import LandingPage from "../components/LandingPage";

export default function HomePage() {
  return (
    <div className="mx-auto w-full">
      <main className="  w-full relative">
        <nav className="nav-wrapper ">
          <Navbar />
        </nav>

       <Wrapper children={<LandingPage />} />
       <About />
        


      </main>

      <div id="footer" className="footer-wrapper ">
        <Footer />
      </div>
    </div>
  );
}
