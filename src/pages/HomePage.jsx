import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/UI/Navbar";


export default function HomePage() {
  return (
    <div className="container mx-auto p-8 ">
      <Navbar />
      <Header />
      <main className="mt-6">
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
