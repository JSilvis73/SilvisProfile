import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/UI/Navbar";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <div className="container mx-auto p-6  ">
      <nav className="nav-wrapper">
        <Navbar />
      </nav>
      <main className="mt-14">
        <div id="header" className="header-wrapper">
          <Header />
        </div>
        <div id="about" className="about-wrapper mt-6">
          <About />
        </div>
        <div id="skills" className="skills-wrapper mt-6">
          <Skills />
        </div>
        <div id="portfolio" className="portfolio-wrapper mt-6">
          <Portfolio />
        </div>
      </main>
      <div id="footer" className="footer-wrapper mt-6">
        <Footer />
      </div>
    </div>
  );
}
