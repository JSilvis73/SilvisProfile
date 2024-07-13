import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

export default function HomePage() {
  return (
    <div>
   <Header />
      <main className="mt-16">
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
