import "./App.css";
import "./index.css";
import "./components/styles/About.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactPage from "./pages/ContactPage";
import Wrapper from "./components/primitive/Wrapper";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Wrapper children={<About />} />} />
        <Route path="/portfolio" element={<Wrapper children={<Portfolio />} />} />
        <Route path="/contact" element={<Wrapper children={<ContactPage />} />} />
     </Routes>
    </Router>
  );
}

export default App;
