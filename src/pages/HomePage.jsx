import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/UI/Navbar";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <div className="container mx-auto p-6 ">
      <nav className="nav-wrapper">
        <Navbar />
      </nav>
      <main className="mt-6">
        <div id="header" className="header-wrapper">
          <Header />
        </div>
        <div id="about" className="about-wrapper">
          <About />
        </div>
        <div id="skills" className="skills-wrapper">
          <Skills />
        </div>
        <div id="portfolio" className="portfolio-wrapper">
          <Portfolio />
        </div>
      </main>
      <div id="footer" className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}
