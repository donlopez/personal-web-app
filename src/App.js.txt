import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

import Planit from "./pages/Planit";
import DataAnalysis from "./pages/DataAnalysis";
import ReactAppWebsite from "./pages/ReactAppWebsite";  
import BlackLionProject from "./pages/BlackLionProject";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/projects/planit" element={<Planit />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          
          {/* Existing project routes */}
         
          <Route path="/projects/data-analysis" element={<DataAnalysis />} />
          <Route path="/projects/react-app-website" element={<ReactAppWebsite />} />
          <Route path="/projects/black-lion-project" element={<BlackLionProject />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
