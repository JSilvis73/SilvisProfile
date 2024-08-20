import './App.css'
import './index.css'
import './components/styles/About.css'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import HomePage from './pages/HomePage'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ContactPage from './pages/ContactPage'
function App() {


  return (
    <Router>
    <div className=" bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600 min-h-screen flex flex-col ">
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<ContactPage />} />
      
    
    </Routes>
    </div>
    </Router>
  )
}

export default App
