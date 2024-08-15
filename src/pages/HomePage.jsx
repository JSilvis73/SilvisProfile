import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/UI/Navbar";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <div className="container mx-auto p-8 ">
      <nav className="nav-wrapper">
        <Navbar />
      </nav>
      <main className="mt-6">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="about-wrapper">
          <About />
        </div>
        <div className="skills-wrapper">
          <Skills />
        </div>
        <div className="portfolio-wrapper">
          <Portfolio />
        </div>
      </main>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}
