import "./App.css";
import "./index.css";
import "./components/styles/About.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactPage from "./pages/ContactPage";
import Wrapper from "./components/primitive/Wrapper";
import Skills from "./components/Skills.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  return (
    <div className="">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactPage />}  />
     </Routes>
    </Router>
    </div>
  );
}

export default App;
