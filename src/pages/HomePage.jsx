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
      <Navbar />
      <Header />
      <main className="mt-6">
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
